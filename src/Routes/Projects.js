import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImgProject from '../Components/HeroImgProject'
import WorkCard from '../Components/WorkCard'
const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgProject heading="PROJECTS." text="Some of my projects."/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Projects
