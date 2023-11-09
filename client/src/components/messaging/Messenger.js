import Wrapper from '../../assets/wrappers/Messenger';
import Conversations from './Conversations';
import Message from './Message';
import { useAppContext } from '../../context/appContext';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { WEBSOCKET_URL } from '../../webConfig';

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const { user } = useAppContext();

  const scrollRef = useRef();

  useEffect(() => {
  // Web Socket Config
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
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.on('getUsers', (users) => {});
  }, [user._id]);

  useEffect(() => {
    const getAllConversations = async () => {
      try {
        const { data } = await axios.get(`/api/v1/conversation/${user._id}`);
        setConversations(data);
        //  console.log(data);
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
            `/api/v1/message/${currentChat._id}`
          );
          setMessages(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      await axios.post('api/v1/message', message);
      const { data } = await axios.get(`api/v1/message/${currentChat._id}`);
      setMessages(data);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Wrapper>
      <div className="messenger">
        <div className="chatMenu">
          {conversations.map((c) => (
            <div key={c._id} onClick={() => setCurrentChat(c)}>
              <Conversations conversation={c} isCurrent={c._id === currentChat?._id} />
            </div>
          ))}
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div key={m._id} ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit(e);
                      }
                    }}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                {' '}
                Open a conversation to start messaging
              </span>
            )}
          </div>
        </div>
        {/* <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default Messenger;
