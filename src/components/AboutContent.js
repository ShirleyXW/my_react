import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react'
import About1 from "../assets/project-bg1.jpg";
import About2 from "../assets/project-bg2.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
                I am a web developer and a computer science student at the University of the Philippines. I am passionate about web development and I am always looking for opportunities to learn new things. I am also interested in machine learning and artificial intelligence.
            </p>
            <Link to="/contact">
                <button className="btn">Contact Me</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={About1} alt="about1" className="img"/>
                </div>
                <div className="img-stack buttom">
                    <img src={About2} alt="about1" className="img"/>
                </div>
            </div> 
        </div>
        
    </div>
  )
}

export default AboutContent