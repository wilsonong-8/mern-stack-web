// import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import {Logo} from "../components"

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* Info*/}
          <div className="info">
            <h1>
              Sell My <span>HDB</span>
            </h1>
            <p>
              Welcome to the one portal to Sell your own HDB. We provide you
              with the tools you need to sell your own HDB.
            </p>
            <Link to="/register" className="btn btn-hero">
              {' '}
              Login/Register
            </Link>
          </div>
          <img src={main} alt="Buy a House" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
