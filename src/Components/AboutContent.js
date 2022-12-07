import React from 'react'
import "./aboutcontent.css"
import { Link } from 'react-router-dom'
const AboutContent = () => {
  return (
    <div className='about-content'>
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Iam a Full Stack Developer, who creates fully secure and responsive website</p>
        <Link to="/contact"><button className='btn'>Contact</button></Link>
      </div>
      <div className="right">
        <div className="image-container">
            <div className="img-stack top">
                <img className='img' src="https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg" alt="" />
            </div>
            <div className="img-stack bottom">
                <img className='img' src="https://successive.tech/wp-content/uploads/2020/01/app-development-with-reactJS.jpeg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
