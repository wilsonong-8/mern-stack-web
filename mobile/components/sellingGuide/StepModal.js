import React from 'react';
import { Modal, Text, View, StyleSheet, SafeAreaView } from 'react-native';

const StepModal = ({ title, description, visible, onClose }) => {
  return (
    <Modal animationType="slide-right" transparent={false} visible={visible}>
      <SafeAreaView style={style.modalContainer}>
        <Text style={style.title}>{title}</Text>
          <Text style={style.descriptionText}>{description}</Text>
        <Text style={style.closeButton} onPress={onClose}>Back</Text>
      </SafeAreaView>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin:20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },
  descriptionText: {
    color: '#252422',
    fontSize: 17,
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default StepModal;
