import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment';

const Message = ({ message, own }) => {
  return (
    <View style={own ? styles.messageOwn : styles.message}>
      <View style={styles.messageTop}>
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
      <View style={styles.messageBottom}>
        <Text style={styles.messageTime}>
          {moment(message.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    // padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0)', // 70% opacity (adjust as needed)

  },
  messageOwn: {
    // padding: 10,
    margin: 5,
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  messageTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 14,
  },
  messageBottom: {
    marginTop: 5,
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
  },
});

export default Message;
