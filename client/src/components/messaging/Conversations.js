import { useEffect, useState } from 'react';
import Wrapper from '../../assets/wrappers/Conversations';
import { useAppContext } from '../../context/appContext';

const Conversations = ({ conversation,isCurrent }) => {
  const [otherUser, setOtherUser] = useState(null);
  const[otherAdvert,setOtherAdvert] = useState(null)
  const [image, setImage] = useState(null);
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
        const {advert} = await getOtherUserAdvert(otherUserId)
        console.log(advert);
        const image1 = advert?.imageSourceNames[0] || '/uploads/user.png';
        setImage(image1);
        setOtherAdvert(advert);

      } catch (error) {
        console.log(error);
      }
    }
    fetchAdvert();
  },[conversation,user])

  return (
    <Wrapper>
    <div className={`conversation ${isCurrent ? 'currentConversation' : ''}`}>
      <div className="chatOnlineImgContainer">
        <img className="conversationImg" src={image} alt="displayPic" />
      </div>
      <span className="conversationName">{otherUser?.name}</span>
      <span className="conversationName">&nbsp;@&nbsp;</span>
      <span className="conversationName">{otherAdvert?.address}</span>
    </div>
  </Wrapper>
  );
};

export default Conversations;
