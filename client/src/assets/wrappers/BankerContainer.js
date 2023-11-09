import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .title {
    color: #1c2541;
    font-size: 3rem;
  }

  .desc {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  
  .bankers {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 768px) {
    .bankers {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }

  @media (min-width: 1200px) {
    .bankers {
      grid-template-columns: 1fr 1fr 1fr; /* Changed to three columns for large screens */
      gap: 1rem; /* You can adjust the gap between bankers as per your design */
    }
  }
`;

export default Wrapper;
