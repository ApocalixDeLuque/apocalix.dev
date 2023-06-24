import React from 'react';
import './navbar.sass';
import CustomTooltip from '../customtooltip/CustomTooltip';
import moon from "../../assets/icons/moon.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div className='navbar__container'>

    
      <div className='navbar__container__logo'>
        <div className='navbar__container__logo-image'>
          <img src={moon} alt='logo' />
        </div>
        <div className='navbar__container__logo-text'>
          <p className='apocalix'>apocalix.dev</p>
          {/* TODO add slash animation */}
          <p className='slash'>/home</p>
        </div>
      </div>
      <div className='navbar__container__links'>
        <div className='navbar__container__links-sections'>
          <p>projects</p>
          <p>about me</p>
          <p>contact</p>
        </div>
        
        <CustomTooltip followCursor
          title={
            <React.Fragment>
                <p>change language</p>
            </React.Fragment>
          }
        >
          <Link to="/es">
            <div className='navbar__container__links-button'>
              <p className='english-text'>en</p>
              <p>/</p>
              <p className='spanish-text'>es</p>
            </div>
          </Link>
          </CustomTooltip>
      </div>
    </div>
  )
}

export default Navbar