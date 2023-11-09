import styled from 'styled-components';
import image from '../images/bg-pattern-desktop.svg';

const Wrapper = styled.main`
  
  // background: #f8edeb;
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  border-radius: 23px;
  box-shadow: 10px 20px 10px -15px rgba(53, 18, 122, 0.497159);
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: #f9dcc4 url(${image}) no-repeat -565px -238px;

  

  header {
    padding: 1rem 1.5rem;
    border-bottom: 5px solid #8a817c;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
    margin: 0 auto;
  }
  .main-icon {
    width: 200px;
    // height: 100px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }

  h2 {
    margin: 0px;
  }

  h5 {
    margin: 0.35rem;
    color: #e71d36;
  }
  p {
    margin: 0;
    text-transform: capitalize;
    color: var(--grey-400);
    letter-spacing: var(--letterSpacing);
  }

  .content {
    padding: 1rem 1rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;

  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    margin: 20px;
  }

  .btn {
    // height: 30px;
    margin: 10px;
  }

  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin: 10px;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  
  .title {
    color: #e71d36;
    border-bottom: 12px double #8a817c;
    padding: 10px 0px 20px 0;
  }

  .sub-title {
    color: #e71d36;
    border-top: 3px dashed #8a817c;
    font-weight: 800;
    font-size: 18px;
    max-width: 1200px;

  }

  .desc {
    color: #011627;
    line-height: 1.3;
    max-width: 1200px;
    white-space: pre-line;
    font-size: 14px;
    border-bottom: 3px dashed #8a817c;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default Wrapper;
