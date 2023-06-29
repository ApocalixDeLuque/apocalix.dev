import React from 'react';
import './header.sass';
import programmer from "../../assets/programmer.svg";
//import bg from "../../assets/bg.png";

const Header = React.forwardRef((props, ref) => {
  return (
    <div className='header__container' id={props.id} ref={ref}>
      {/*<img className='bg' src={bg} alt='background'></img>*/}
      <div className='header__container-content'>
        <div className='header__container-content-info'>

          <div className='header__container-content-info_text'>
            <h2>hello! 👋</h2>
            <p>my name is jonathan, aka <span>apocalix</span> :)</p>
          </div>

          <div className='header__container-content-info_button'>
            <div className='button'>
              <p>about me</p>
            </div>
          </div>

        </div>
      </div>

      <div className='header__container-image'>
        <img src={programmer} alt='programmer'></img>
      </div>
    </div>
  )
});

export default Header