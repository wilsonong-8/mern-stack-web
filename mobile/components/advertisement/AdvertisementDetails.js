import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { API_BASE_URL } from '../../mobileConfig';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../context/appContext';
import axios from 'axios'; 



const AdvertisementDetails = ({ route }) => {
  const {user} = useAppContext()
  const { advertisement } = route.params;
  const [activeSlide, setActiveSlide] = useState(1);
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

useEffect(()=> {
  const fetchImages = async () => {
    try {
      const imagePromises = advertisement.imageSourceNames.map(async (item) => {
        const response = await fetch(API_BASE_URL + item);
        if (!response.ok) {
          // Handle non-successful response, e.g., throw an error
          throw new Error(`Failed to fetch image: ${item}`);
        }
        
        // Use the response's URL directly as the image source
        const imageUrl = API_BASE_URL + item;
        return imageUrl;
      });
  
      const imageUrls = await Promise.all(imagePromises);
      setImages(imageUrls);
    } catch (error) {
      console.error('Error fetching image URL:', error);
    }
  };
  fetchImages()
},[])


  // Custom pagination component to show slide numbers
  const renderPagination = (activeSlide, total) => {
    return (
      <View style={styles.paginationContainer}>
        <Text style={styles.paginationText}>
          {activeSlide + 1} / {total}
        </Text>
      </View>
    );
  };

  const formattedDate = new Date(advertisement.createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const createConversation = async () => {
    try {
      const conversation = await axios.get(
        `${API_BASE_URL}/api/v1/conversation/${user._id}/${advertisement.createdBy}`
      );
      if (conversation) {
        navigation.navigate('ChatPage', { sellerId: advertisement.createdBy });

      }
    } catch (error) {
      const { data } = await axios.post(`${API_BASE_URL}/api/v1/conversation`, {
        senderId: user._id,
        receiverId: advertisement.createdBy,
      });
      const conversationId = data.newConversation._id;
      console.log(conversationId);

      navigation.navigate('ChatPage', { sellerId: advertisement.createdBy });

    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Swiper
          key={images.length} // Change the key when images change to remount the Swiper
          style={styles.swiperContainer}
          onIndexChanged={(index) => setActiveSlide(index)}
          horizontal={true}
          loop={false}
          showsPagination={true}
          renderPagination={renderPagination}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          ))}
        </Swiper>

        <Text style={styles.address}>Address: {advertisement.address}</Text>
        <Text style={styles.text}>Unit Type: {advertisement.unitType}</Text>
        <Text style={styles.text}>Area: {advertisement.area}</Text>
        <Text style={styles.text}>
          Postal Code: {advertisement.postalCode}{' '}
          <Text
            style={styles.mapLink}
            onPress={() => {
              const postalCode = advertisement.postalCode;
              const mapUrl = `https://www.google.com/maps/search/?api=1&query=${postalCode}`;
              Linking.openURL(mapUrl);
            }}
          >
            (Search on Google Maps)
          </Text>
        </Text>
        <Text style={styles.text}>Size: {advertisement.size}</Text>
        <Text style={styles.text}>Price: {advertisement.price}</Text>
        <Text style={styles.description}>
          Description: {advertisement.description}
        </Text>
        <Text style={styles.text}>Posted on: {formattedDate}</Text>
        
        {user._id !== advertisement.createdBy && (
        <TouchableOpacity
          style={styles.chatButton}
          onPress={createConversation}
        >
          <Text style={styles.chatButtonText}>Chat with Seller</Text>
        </TouchableOpacity>
        )}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f8edeb',

  },
  swiperContainer: {
    height: Dimensions.get('window').height * 0.4,
  },
  imageContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  address: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,

  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    padding: 4,
  },
  paginationText: {
    color: 'white',
    fontSize: 12,
  },
  mapLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  chatButton: {
    backgroundColor: '#007AFF', // Change to your desired button color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 10,
    alignItems: 'center',
  },
  chatButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdvertisementDetails;
