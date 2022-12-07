import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import "./Footerr.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />

                        <div>
                            <p>Hyderabad-500012</p>
                            <p>Telangana</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            +919346479991</h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            namanpuri31@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Connect with me:</h4>
                    <p>On the social media handles</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "white", marginRight: "2rem" }} />
                        <FaLinkedin size={30} style={{ color: "white", marginRight: "2rem" }} />
                        <FaInstagram size={30} style={{ color: "white", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
