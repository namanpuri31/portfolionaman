import React from 'react'
import "./heroimagee.css"
import programmer from "../images/programmer.png"
import {Link} from "react-router-dom"
const HeroImage = () => {
    return (
        <div className='hero'>
            <div className="bgimg">
                <img className='intro-bg' src={programmer} alt="" />
            </div>
            <div className="content">
                <p>HI,I'M NAMAN PURI</p>
                <h1>FULL STACK DEVELOPER</h1>
                <div className="buttons">
                    <Link to='/contact' className='btn'>Contact</Link>
                    <Link to='/project' className='btn btn-light'>Projects</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage
