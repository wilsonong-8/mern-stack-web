import Wrapper from '../../assets/wrappers/Message';
import moment from 'moment'

const Message = ({ message, own }) => {
  return (
    <Wrapper>
      <div className={own ? 'message own' : 'message'}>
        <div className="messageTop">
          {/* <img
          className={own ? 'messageImg invisible' : 'messageImg'}
          src="/uploads/user.png"
          alt="displayPic"
        /> */}
          <p className="messageText">{message.text} </p>
          {/* <img
            className={own ? 'messageImg' : 'messageImg invisible'}
            src="/uploads/user.png"
            alt="displayPic"
          /> */}
        </div>
        <div className="messageBottom">{moment(message.createdAt).fromNow()}</div>
      </div>
    </Wrapper>
  );
};
export default Message;
