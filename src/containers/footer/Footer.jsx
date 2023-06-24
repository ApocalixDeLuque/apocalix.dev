import React from 'react';
import './footer.sass';
import moon from "../../assets/icons/moon.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section id="footer">
    <div className='footer__container'>
      <div className='footer__container__logo'>
        <img src={moon} alt='logo'></img>
        <div className='footer__container__logo-text'>
        <Link to="/"> 
          <p>apocalix.dev</p>
        </Link>
        </div>
      </div>
      <div className='footer__container__links'>
        <div className='footer__container__links-section'>
          <h2>go to</h2>
          <Link to="/home">
            <p>home</p>
          </Link>
          <p>projects</p>
          <p>about me</p>
          <p>contact</p>
        </div>
        <div className='footer__container__links-section'>
          <h2>contact</h2>
          <p>email</p>
          <p>linkedin</p>
          <p>github</p>
          <p>whatsapp</p>
          <p>discord</p>
        </div>
        <div className='footer__container__links-section'>
          <h2>other</h2>
          <p>socials</p>
          <p>geek stuff</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer