import "./FooterStyles.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>13618 100 ave</p>
                            <p>Surrey, BC</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        778-999-9999
                        </h4>
                    </div>
                    <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        shirley.wang.xinli@gmail.com
                    </h4>
                    </div>

                </div>

                <div className="right">
                    <h4>About me</h4>
                    <div className="social">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} href=""/>
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} href=""/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer