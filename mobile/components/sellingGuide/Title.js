import React, {useState} from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import StepModal from './StepModal';

const Title = ({ data }) => {
  const { title, description } = data;

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>
      <StepModal title={title} description={description} visible={modalVisible} onClose={toggleModal} />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 8,
    // marginLeft:5,
    marginBottom: 5,
    color: '#415a77', 
    textDecorationLine: 'underline', 
    textAlign: 'left',
  },
});

export default Title;
