import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heropro from '../components/Heropro';
import Work from '../components/work';
const Project = () => {
  return (
    <div >
      <Navbar/>
      <Heropro heading="Project" text=" Some of my work"  />
    <Work/>
     <Footer/> 
    
    </div>
  )
}

export default Project