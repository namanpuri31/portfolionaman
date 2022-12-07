import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImgProject from '../Components/HeroImgProject'
import ContactComp from '../Components/ContactComp'
const Contact = () => {
  return (
    <div className='contact'>
      <Navbar/>
      <HeroImgProject heading="CONTACT." text="Contact me."/>
      <ContactComp/>
      <Footer/>
    </div>
  )
}

export default Contact
