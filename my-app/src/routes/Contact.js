import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heropro from '../components/Heropro';
import Form from '../components/Form'


const Contact = () => {
  return (
    <div > <Navbar/>
    <Heropro heading="contact me" text=" let chat "/>
    <Form/>
      <Footer/></div>
  )
}

export default Contact