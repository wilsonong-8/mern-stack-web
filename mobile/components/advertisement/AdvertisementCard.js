import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { API_BASE_URL } from '../../mobileConfig';

const AdvertisementCard = ({ advertisement }) => {
  const {
    address,
    price,
    size,
    unitType,
    createdAt,
    imageSourceNames,
  } = advertisement;

  // Assuming that imageSourceNames is an array of image URLs
  const firstImageSource = imageSourceNames[0];

  // Format the createdAt date
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: API_BASE_URL + firstImageSource }} style={styles.image} />
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
      <Text style={styles.size}>Size: {size} sqft</Text>
      <Text style={styles.unitType}>Unit Type: {unitType}</Text>
      <Text style={styles.createdAt}>Date Posted: {formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  size: {
    fontSize: 16,
    marginTop: 5,
  },
  unitType: {
    fontSize: 16,
    marginTop: 5,
  },
  createdAt: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default AdvertisementCard;
