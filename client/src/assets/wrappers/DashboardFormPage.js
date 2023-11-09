import styled, { css } from 'styled-components';
import image from '../images/bg-pattern-desktop.svg';

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: 10px 20px 10px -15px rgba(53, 18, 122, 0.497159);
  border-radius: 23px;
  background: #f8edeb url(${image}) no-repeat -655px -295px;

  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
    background: #f8edeb url(${image}) no-repeat -687px -344px;
  }
  .form-row {
    margin-bottom: 0;
    background: #f8edeb url(${image}) no-repeat relative;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
    background: #f8edeb url(${image}) no-repeat relative;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }

  ${({ isAdmin }) =>
    !isAdmin &&
    css`
      display: none;
    `}
`;

export default Wrapper;
