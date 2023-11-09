import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { API_BASE_URL } from '../../mobileConfig';

const ImageDisplay = ({ images, onDeleteImage }) => {

  return (
    <View style={styles.container}>
      {images.map((imageUrl, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{ uri: API_BASE_URL + imageUrl }} style={styles.image} />
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDeleteImage(imageUrl)}
          >
            <Text style={styles.deleteButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: '33.33%', // To display 3 images in a row
    padding: 5,
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 1, // Maintain image aspect ratio
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    zIndex: 1,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ImageDisplay;
