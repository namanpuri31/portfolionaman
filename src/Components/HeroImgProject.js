import React from 'react'
import "./heroimageproject.css"
const HeroImgProject = (props) => {
  return (
    <div className='hero-image-project'>
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default HeroImgProject
