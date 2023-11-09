import styled from 'styled-components';
import image from '../images/bg-pattern-desktop.svg';


const Wrapper = styled.main`
  .messenger {
    border-radius: 23px;
    box-shadow: var(--shadow-2);
    box-shadow: 10px 20px 10px -15px rgba(53, 18, 122, 0.497159);
    height: calc(100vh - 150px);
    display: flex;
  }

  .chatMenu {
    min-width: 180px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fcd5ce;
    background: #f8edeb url(${image}) no-repeat -565px -238px;
    flex: 3;
    overflow-y: auto;
  }

  .chatMenuInput {
    background: #edede9;
    width: 90%;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid gray;
  }

  .chatBox {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #f9dcc4;
    flex: 5.5;
  }

  .chatBoxWrapper,
  .chatOnlineWrapper {
    padding: 10px;
    height: 100%;

  }

  .chatBoxWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .chatBoxTop {
    height: 100%;
    overflow-y: scroll;
    padding-right: 10px;
  }

  .chatBoxBottom {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chatMessageInput {
    border-radius: 10px;
    width: 80%;
    height: 80px;
    padding: 10px;
    resize: none;
    font-size: 0.9rem;
  }

  .chatSubmitButton {
    width: 70px;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #4a5759;
    color: white;
  }

  .noConversationText {
    position: absolute;
    top: 40%;
    left: 40%;
    // transform: translateX(-50%);
    font-size: 15px;
    cursor: default;
  }

  @media screen and (max-width: 768px) {
    .chatMenu {
      flex: 1;
    }

    // .chatMenuInput {
    //   display: none;
    // }

    .chatBox {
      flex: 10;
    }
  }
`;
export default Wrapper;
