import styled from 'styled-components';

const Wrapper = styled.section`
.message {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  
  .messageTop{
      display: flex;
  }
  
  .messageImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .messageImg.invisible {
    opacity: 0; 
    pointer-events: none; 
}
  }
  
  .messageText{
    font-size: 0.9rem;
      padding: 10px;
      border-radius: 20px;
      background-color: #4267B2;
      color: white;
      max-width: 300px;
  }
  
  .messageBottom{
      font-size: 12px;
      margin-top: -10px;
  }
  
  .message.own{
      align-items: flex-end;
  }
  
  .message.own .messageText{
      background-color:#25D366;
      
  }
`;

export default Wrapper;
