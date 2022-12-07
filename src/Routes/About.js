import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImgProject from '../Components/HeroImgProject'
import AboutContent from '../Components/AboutContent'
const About = () => {
  return (
    <div className='about'>
      <Navbar/>
      <HeroImgProject heading="ABOUT." text="About me"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
