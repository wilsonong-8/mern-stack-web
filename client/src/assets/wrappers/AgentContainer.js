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
    margin: 2rem;
    color: #1c2541;
    font-size: 3rem;
  }

  .desc {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .agents {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem; /* Changed from row-gap to gap */
  }

  @media (min-width: 576px) {
    .agents {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .agents {
      grid-template-columns: 1fr 1fr 1fr; /* Changed to three columns for large screens */
      gap: 1rem; /* You can adjust the gap between agents as per your design */
    }
  }
`;
export default Wrapper;
