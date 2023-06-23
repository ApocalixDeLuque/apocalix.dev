import React from 'react';
import { Navbar } from '../components';
import '../styles/_main.sass';

const MainLayout = ({ children }) => {
  return (
  	<div className='layout-container'>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
