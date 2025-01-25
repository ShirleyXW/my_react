import React from 'react'
import Navbar from '../components/Navbar'; 
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
    <Navbar />
    <HeroImg2 heading="CONTACT." text="Get in Touch"/>
    <Form />
  </div>
  )
}

export default Contact