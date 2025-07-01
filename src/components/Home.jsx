import React, { useState } from 'react'
import News from './News.jsx'
import { useOutletContext } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const { menu, search } = useOutletContext(); 
  
  return (
    <div className=''> 
      <News menu={menu} search={search}  />
      <Footer />
    </div>
  );
}

export default Home