import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { useAppContext } from '../../context/appContext';
import { Picker } from '@react-native-picker/picker';

const AdvertSearchModal = ({ visible, onClose }) => {
  const { getAdverts, areaOptions, unitTypeOptions } = useAppContext();

  const [searchText, setSearchText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFlatType, setSelectedFlatType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    getAdverts(searchText, selectedLocation, selectedFlatType, minPrice, maxPrice);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Advert Search</Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedFlatType}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedFlatType(itemValue)
            }
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Select Unit Type" value="" />
            {unitTypeOptions.map((option, index) => (
              <Picker.Item label={option} value={option} key={index} />
            ))}
          </Picker>

          <Picker
            selectedValue={selectedLocation}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLocation(itemValue)
            }
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Select Location" value="" />
            {areaOptions.map((option, index) => (
              <Picker.Item label={option} value={option} key={index} />
            ))}
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Min Price"
          value={minPrice}
          onChangeText={(text) => setMinPrice(text)}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Max Price"
          value={maxPrice}
          onChangeText={(text) => setMaxPrice(text)}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8edeb',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    marginBottom: 40,
    paddingLeft: 10,
    fontSize: 18,
  },
  pickerContainer: {
    flexDirection: 'row', // Arrange pickers horizontally
  },
  picker: {
    flex: 1, // Distribute available space evenly
    // borderWidth: 5,
    // borderColor: '#ccc',
    // borderRadius: 180,
    marginBottom: 40,
    // backgroundColor: 'pink',
  },
  pickerItem: {
    fontSize: 20,
  },
  searchButton: {
    backgroundColor: '#007AFF', // Change to your desired button color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 10,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ffffff', // Change to your desired button color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AdvertSearchModal;
