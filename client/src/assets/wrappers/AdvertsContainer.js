import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }

  .adverts {
    display: grid;
    grid-template-columns: 1fr;  /* Set one column by default */
    gap: 2rem;  /* Set gap between grid items */
  }
  @media (min-width: 992px) {
    .adverts {
      grid-template-columns: 1fr 1fr;  /* Set two columns for larger screens */
      gap: 1rem;  /* Set gap between grid items */
    }
  }
`;

export default Wrapper;
