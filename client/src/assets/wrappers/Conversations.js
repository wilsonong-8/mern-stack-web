import styled from 'styled-components';
import image from '../images/bg-pattern-desktop.svg';


const Wrapper = styled.section`
  .conversation {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 0.9rem;
  }

  .currentConversation{
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 0.9rem;
    background: #faedcd
  }

  .chatMenuWrapper {
    height: 800px;
    overflow-y: auto;
  }

  .conversation:hover {
    background: #faedcd;
    
  }

  .conversationImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid white;
  }

  .conversationName {
    font-weight: 500;
    align-items: center;
    text-transform: capitalize;
  }

  .chatOnlineImgContainer {
    position: relative;
    margin-right: 10px;
  }

  .chatOnlineBadge {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: limegreen;
    position: absolute;
    top: 2px;
    right: 2px;
  }

  // @media screen and (max-width: 992px) {
  //   .conversation{
  //     display: grid;
  //   }
  // }
`;

export default Wrapper;
