import React from 'react'
import './Services.css'
import Card from '../Cards/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './shubhamresume.pdf';


const Services = () => {
  return (
    <div className="services">

        {/*left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <span>
                I have some skills which i want to use to make usefull.
                <br />
                Not just for doing sake but to inovate and develop 
                <br />
                something new, something creative.
                <br />
                Ipsum minus a veritatis molestias.
            </span>
            <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

        </div>
        {/*right  side */}
        <div className="cards">
        
        <div style={{left:'14rem'}}>
            {/* first card */}
            <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator"}
          />
        </div>
        <div style={{top:'14rem',left:'-4rem'}}>
             {/* second card */}
       
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs"}
          />
        </div>
        <div style={{top:'19rem',left:'12rem'}}>
            {/* 3rd */}
        
          <Card
            emoji={Humble}
            heading={"Coder"}
            detail={
              "C/C++, python at Leetcode Hackerrank GeeksforGeeks etc."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
          
        
       
        
        
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  )
}

export default Services