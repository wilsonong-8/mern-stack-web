import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
} from 'react-native';
import { useAppContext } from '../../context/appContext';
import { Picker } from '@react-native-picker/picker';

const SearchModal = ({ visible, onClose }) => {
  const {
    hdb_flatTypeOptions,
    getPastRecords,
  } = useAppContext();

  const [townInput, setTownInput] = useState('');
  const [blockInput, setBlockInput] = useState('');
  const [streetInput, setStreetInput] = useState('');
  const [selectedFlatType, setSelectedFlatType] = useState('');


  const handleSearch = () => {
    getPastRecords(townInput, blockInput, streetInput, selectedFlatType);
    onClose()
  };


  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={style.modalContainer}>
      <Text style={style.modalTitle}>Search </Text>

      <Picker
          selectedValue={selectedFlatType}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedFlatType(itemValue)
          }
          style={style.picker}
        >
          <Picker.Item label="Select Unit Type" value="" />
          {hdb_flatTypeOptions.map((option, index) => (
            <Picker.Item label={option} value={option} key={index} />
          ))}
        </Picker>

       
        <TextInput
          style={style.input}
          placeholder="Town"
          value={townInput}
          onChangeText={(text) => setTownInput(text)}
        />
        <TextInput
          style={style.input}
          placeholder="Block"
          value={blockInput}
          onChangeText={(text) => setBlockInput(text)}
        />
        <TextInput
          style={style.input}
          placeholder="Street"
          value={streetInput}
          onChangeText={(text) => setStreetInput(text)}
        />
        {/* <Text style={style.inputLabel}>Unit Type</Text> */}
    

        <TouchableOpacity style={style.searchButton} onPress={handleSearch}>
          <Text style={style.searchButtonText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.closeButton} onPress={onClose}>
          <Text style={style.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(1, 244, 233, 244)', // Adjust opacity to make it more opaque
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
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  picker: {
    width: '55%',
    borderWidth: 5,
    borderColor: '#ccc',
    borderRadius: 360,
    // overflow: 'hidden', // Hide overflowing content
    marginBottom:50,
    marginTop:50,
    // backgroundColor:'pink'
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

export default SearchModal;
