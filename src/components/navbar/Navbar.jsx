import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.sass';
import CustomTooltip from '../customtooltip/CustomTooltip';
import moon from "../../assets/icons/moon.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash

  const [text, setText] = useState('');
  //eslint-disable-next-line
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    setShowCaret(false);
    setText('');

    let i = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + currentPath.charAt(i-1));
      i++;

      if (i === currentPath.length) {
        clearInterval(interval);
        setShowCaret(true);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [currentPath]);

  return (
    <div className='navbar__container'>
      <div className='navbar__container__logo'>
        <div className='navbar__container__logo-image'>
          <img src={moon} alt='logo' />
        </div>
        <div className='navbar__container__logo-text'>
          <p className='apocalix'>apocalix.dev</p>
          <p className='slash'>
            /{text}<span className='slash blink'>_</span>
          </p>
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