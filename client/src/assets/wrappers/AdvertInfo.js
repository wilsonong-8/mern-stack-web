import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: #ee372e;

    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;
