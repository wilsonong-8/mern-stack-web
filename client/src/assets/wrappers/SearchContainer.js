import styled from 'styled-components';
import image from '../images/bg-pattern-desktop.svg';


const Wrapper = styled.section`
  .form {
    background: #f8edeb url(${image}) no-repeat -565px -295px;
    width: 100%;
    max-width: 100%;
<<<<<<< HEAD
<<<<<<< HEAD
    box-shadow: 10px 20px 10px -15px rgba(53, 18, 122, 0.497159);
    border-radius: 23px;
=======
    border-radius: 10px;
    box-shadow: 10px 20px 10px -15px rgba(53, 18, 122, 0.497159);
>>>>>>> test_branch
=======
    border-radius: 10px;
    box-shadow: 10px 20px 10px -15px rgba(53, 18, 122, 0.497159);
>>>>>>> test_branch
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .btn-block {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
