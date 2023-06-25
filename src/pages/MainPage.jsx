import React from 'react';
import '../styles/_main.sass';
import { Header, Projects, AboutMe } from '../containers'

const Home = () => {
  return (
  	<div>
      <Header/>
      <Projects/>
      <AboutMe/>
    </div>
  );
};

export default Home;
