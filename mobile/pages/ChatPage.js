import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Messenger from '../components/messaging/Messenger';

const ChatPage = ({route}) => {
  let sellerId; // Declare sellerId here

  if (route) {
    sellerId = route?.params?.sellerId; // Check if route.params is defined
  }
  return (
    <Messenger sellerId={sellerId}/>
  )
}
export default ChatPage