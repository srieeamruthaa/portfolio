import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heropro from '../components/Heropro';
import Aboutcontent from '../components/Aboutcontent';
const About = () => {
  return (
    <div> <Navbar/>
    <Heropro heading="About me" text=" I'm a friendly front end developer"/>
     <Aboutcontent/>
      <Footer/></div>
  )
}

export default About