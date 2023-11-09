import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { API_BASE_URL } from '../mobileConfig';

const Agent = ({
  _id,
  agent_name,
  agent_company,
  agent_position,
  agent_email,
  agent_image,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: API_BASE_URL + agent_image }} style={styles.mainIcon} />
        <View style={styles.info}>
          <Text style={styles.text}>{agent_name}</Text>
          <Text style={styles.text}>{agent_company}</Text>
          <Text style={styles.text}>{agent_position}</Text>
        <Text style={styles.email}>{agent_email}</Text>
        </View>
      </View>
      <View style={styles.content}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      padding: 10,
      margin: 10,
      // marginLeft:50,
      // marginRight:50,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
    header: {
      flexDirection: 'row', 
      alignItems: 'center',
    },
    mainIcon: {
      width: 100,
      height: 120,
      borderRadius: 10,
      margin: 10,
      marginRight: 30,
    },
    info: {
      alignItems: 'left', // Center horizontally
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#415a77',
      marginBottom: 3,
    },
    content: {
      marginTop: 10,
    },
    email: {
      marginTop:5,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    footer: {
      marginTop: 10,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    editBtn: {
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 5,
      marginRight: 10,
    },
    deleteBtn: {
      backgroundColor: 'red',
      padding: 5,
      borderRadius: 5,
    },
    btnText: {
      color: 'white',
      fontSize: 16,
    },
  });
  
export default Agent;
