import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useAppContext } from '../context/appContext';
import { Picker } from '@react-native-picker/picker';
import ImageDisplay from '../components/advertisement/ImageDisplay';
import * as ImagePicker from 'expo-image-picker';
import LoadingOverlay from '../components/ui/LoadingOverlay';

const MyAdvert = () => {
  const {
    user,
    address,
    postalCode,
    area,
    unitType,
    size,
    price,
    description,
    imageSourceNames,
    areaOptions,
    unitTypeOptions,
    hasAdvert,
    getUserAdvert,
    deleteSingleImage,
    uploadImage,
    imageToUploadList,
    updateAdvert,
    isLoading,
    setArea,
    setUnitType,
    handleChange,
    createAdvert,
    deleteAdvert,
    getAdverts,
  } = useAppContext();

  const fetchData = async () => {
    await getUserAdvert();
  };

  useEffect(() => {
    fetchData();
  }, [hasAdvert]);

  const selectImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Check if total image count will exceed 5
      if (imageSourceNames.length + 1 > 5) {
        Alert.alert('Error', 'Cannot upload more than 5 images');
      } else {
        // Add the selected image URI to the images state
        // setImages([...images, pickerResult.uri]);
        await uploadImage(result.assets[0]);
        // const prettyResult = JSON.stringify(result, null, 2);
        // console.log(prettyResult);
      }
    }
  };

  const handleDeleteImage = (imageToDelete) => {
    const length = imageSourceNames.length;
    deleteSingleImage(user._id, imageToDelete, length);
    fetchData();
  };

  const handleSubmit = async () => {
    if (
      !address ||
      !postalCode ||
      !size ||
      !price ||
      !description) {
      Alert.alert('Error', 'Please fill up all inputs');}
      else if (
        imageSourceNames.length === 0 && imageToUploadList.length === 0) {
          Alert.alert('Error', 'Minimum 1 image required');
        }
     else {
      if (hasAdvert) {
        try {
          await updateAdvert();
          await fetchData();
          await getAdverts('', '', '', '', '');
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await createAdvert();
          await fetchData();
          await getAdverts('', '', '', '', '');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleDelete = async () => {
    await deleteAdvert();
    await fetchData()
    await getAdverts('', '', '', '', '');
  };

  const handleFieldChange = (name) => (text) => {
    handleChange({ name, value: text });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Conditional rendering based on isLoading */}
        {/* {isLoading ? (
          <LoadingOverlay />
        ) : (
          <> */}
        {/* Your main view */}
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleFieldChange('address')}
          value={address}
          placeholder="Enter address"
        />

        <Text style={styles.label}>Postal Code:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleFieldChange('postalCode')}
          value={postalCode}
          keyboardType="numeric"
          maxLength={6}
          placeholder="Enter postal code"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title2}>Location:</Text>
          <Text style={styles.title2}>Unit Type:</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={area} // Use context state directly
            style={styles.picker}
            itemStyle={styles.pickerItem}
            onValueChange={(itemValue, itemIndex) => {
              setArea(itemValue);
            }}
          >
            {areaOptions.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>

          <Picker
            selectedValue={unitType} // Use context state directly
            style={styles.picker}
            itemStyle={styles.pickerItem}
            onValueChange={(itemValue, itemIndex) => {
              setUnitType(itemValue);
            }}
          >
            {unitTypeOptions.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Size:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleFieldChange('size')}
          value={size}
          keyboardType="numeric"
          maxLength={4}
          placeholder="Enter size"
        />

        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleFieldChange('price')}
          value={price}
          keyboardType="numeric"
          minLength={6}
          maxLength={7}
          placeholder="Enter price"
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.textArea}
          onChangeText={handleFieldChange('description')}
          value={description}
          multiline={true}
          numberOfLines={4}
          placeholder="Enter description"
        />

        <Button title="Choose 1 Image to Upload" onPress={selectImage} />
        <Text>{imageToUploadList}</Text>

        <Text>Images:</Text>
        {/* Pass images and onDeleteImage function to ImageDisplay */}
        <ImageDisplay
          images={imageSourceNames}
          onDeleteImage={handleDeleteImage}
        />

        {/* <Button title="Submit" onPress={handleSubmit} /> */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

        {/* <Button title="Delete" onPress={handleDelete} /> */}
        <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8edeb',

  },
  title2: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  label:{
    fontSize: 16,
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 16,
    paddingLeft: 8,
    paddingTop: 8,
  },
  textContainer: {
    flexDirection: 'row', // Arrange pickers horizontally
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
  submitButton: {
    backgroundColor: 'rgba(0, 122, 255, 0.7)', // Change alpha (last value) to control transparency
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginLeft:20,
    marginRight:20,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'rgba(236, 44, 44, 0.8)', // Change alpha (last value) to control transparency
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginLeft:20,
    marginRight:20,
    margin: 10,
    alignItems: 'center',
  }
});

export default MyAdvert;
