import styled from 'styled-components';

const Wrapper = styled.section`
  main {
    // height: 100%;
    max-width:1000px;

  }
  .main {
    // height:100px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
    
  }
  .gallery2 {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
  
    .image-container {
      position: relative;
      max-width: 100%;
    }
    
    .img {
      max-width: 100%;
      height: auto;
    }
    
    .delete-overlay {
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(211, 141, 141, 0.6); 
      padding: 6px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
    
    .delete-overlay span {
      font-size: 20px;
    }
  }
  
    
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default Wrapper;
