import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { io } from 'socket.io-client';
import Conversation from './Conversation';
import Message from './Message'; 
import { useAppContext } from '../../context/appContext';
import { API_BASE_URL, WEBSOCKET_URL } from '../../mobileConfig';
import axios from 'axios';


const Messenger = ({ sellerId }) => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();

  const { user } = useAppContext();

  // Function to scroll to the bottom of the ScrollView
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
  //Web Socket Configuration
    socket.current = io(WEBSOCKET_URL, {
      reconnection: true, // Enable reconnection
      reconnectionAttempts: 5, // Number of reconnection attempts
      timeout: 10000, // Connection timeout in milliseconds
    });

    // Event listener for incoming messages
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });

    // Event listener for successful reconnection
    socket.current.on('reconnect', (attemptNumber) => {
      console.log(`Socket reconnected after ${attemptNumber} attempts`);
      // You can add your own logic or UI feedback here
    });

    // Event listener for socket reconnection error
    socket.current.on('reconnect_error', (error) => {
      console.log('Socket reconnection error:', error.message);
      // You can add your own error handling or UI feedback here
    });

    // Emit 'addUser' event when the user's ID changes (i.e., on login)
    socket.current.emit('addUser', user._id);

    // Clean up socket connection when the component unmounts
    return () => {
      socket.current.disconnect();
    };
  }, [user._id]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
    
    // Scroll to the bottom when messages change
    scrollToBottom();
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.on('getUsers', (users) => {});
  }, [user._id]);

  useEffect(() => {
    const getAllConversations = async () => {
      try {
        const { data } = await axios.get(
          `${API_BASE_URL}/api/v1/conversation/${user._id}`
        );
        setConversations(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        if (currentChat) {
          const { data } = await axios.get(
            `${API_BASE_URL}/api/v1/message/${currentChat._id}`
          );
          setMessages(data);
          
          // Scroll to the bottom when messages change
          scrollToBottom();
        }
      } catch (error) {
        console.log(error);
      }
    };

    getMessages();
  }, [currentChat]);

  useEffect(() => {
    const chatToSeller = conversations.find((conversation) =>
      conversation.members.includes(sellerId)
    );

    setCurrentChat(chatToSeller);
  }, [conversations, sellerId]);

  const handleSubmit = async () => {
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit('sendMessage', {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });
  
    try {
      await axios.post(`${API_BASE_URL}/api/v1/message`, message);
      const { data } = await axios.get(
        `${API_BASE_URL}/api/v1/message/${currentChat._id}`
      );
      setMessages(data);
      setNewMessage('');
      
      // Scroll to the bottom when a new message is sent
      scrollToBottom();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.conversationList}>
        {conversations.map((c) => (
          <Conversation
            key={c._id}
            conversation={c}
            onPress={() => setCurrentChat(c)}
            isCurrent={c._id === currentChat?._id}

          />
        ))}
      </ScrollView>

      <View style={styles.chatContainer}>
        <ScrollView
          ref={scrollRef} // Assign the ref to the ScrollView
          style={styles.chat}
          onContentSizeChange={() => scrollToBottom()} // Ensure scroll to bottom
        >
          {messages.map((message) => (
            <View
              key={message._id}
              style={[
                styles.message,
                {
                  alignSelf:
                    message.sender === user._id ? 'flex-end' : 'flex-start',
                  backgroundColor:
                    message.sender === user._id ? '#DCF8C6' : '#FFFFFF',
                },
              ]}
            >
              <Message message={message} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={newMessage}
            onChangeText={(text) => setNewMessage(text)}
          />
          <Button title="Send" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f8edeb',
  },
  conversationList: {
    flex: 1,
    backgroundColor: '#e5e5e5',

  },
  conversationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatContainer: {
    flex: 3,
    padding: 20,
  },
  chat: {
    flex: 1,
  },
  message: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default Messenger;
