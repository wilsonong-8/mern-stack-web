import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppContext } from '../../context/appContext';

const Conversation = ({ conversation, onPress, isCurrent }) => {
  const [otherUser, setOtherUser] = useState(null);
  const [otherAdvert, setOtherAdvert] = useState(null);
//   const [image, setImage] = useState(null);
  const { getUser, user, getOtherUserAdvert } = useAppContext();

  useEffect(() => {
    const otherUserId = conversation.members.find((m) => m !== user._id);
    const fetchUser = async () => {
      try {
        const data = await getUser(otherUserId);
        setOtherUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [conversation, user]);

  useEffect(() => {
    const otherUserId = conversation.members.find((m) => m !== user._id);
    const fetchAdvert = async () => {
      try {
        const { advert } = await getOtherUserAdvert(otherUserId);
        // const image1 = advert?.imageSourceNames[0] || '/uploads/user.png';
        // setImage(image1);
        setOtherAdvert(advert);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdvert();
  }, [conversation, user]);

  return (
    <TouchableOpacity style={[styles.conversation, isCurrent ? styles.currentConversation : null]}  onPress={onPress}>
      {/* <View style={styles.imageContainer}>
        <Image
          style={styles.conversationImg}
          source={{ uri: image }}
          resizeMode="cover"
          onError={() => console.log('Error loading image')}
        />
      </View> */}
      <Text style={styles.conversationName}>
        {otherUser?.name} {'\n'}@ {otherAdvert?.address}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conversation: {
    // flexDirection: 'row',
    alignItems: 'left',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  conversationImg: {
    width: '100%',
    height: '100%',
  },
  conversationName: {
    fontSize: 14,
  },
  currentConversation: {
    backgroundColor: 'lightblue',
  },
});

export default Conversation;
