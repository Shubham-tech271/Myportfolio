import React from 'react'
import './Intro.css';

import Vector1 from '../../../img/Vector1.png';
import Vector2 from '../../../img/Vector2.png';
import boy from '../../../img/boy.png';
import glassesimoji from '../../../img/glassesimoji.png';
import thumbup from '../../../img/thumbup.png';
import crown from '../../../img/crown.png';


import Github from '../../../img/github.png';
import LinkedIn from '../../../img/linkedin.png';
import Instagram from '../../../img/instagram.png';
import FloatingDiv from '../../FloatingDiv/FloatingDiv';

export const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
            <span>Hii! I Am</span>
            <span>Shubham Kumar</span>
            <span> Web Developer, Coder, Knowledge of Linux etc
                Looking forword to working with you and use the
                skills that I have developed till now. I belive in quality work.
            </span>
            </div>

            <button className="button i-button"> Hire me </button>

            <div className="i-icons">
                <a href="https://github.com/Shubham-tech271"><img src={Github} alt="github" /></a>
                <a href="http://www.linkedin.com/in/Shubham-tech271"><img src={LinkedIn} alt="linkedin" /></a>
                <a href="#"><img src={Instagram} alt="insta" /></a>
            
            
            
            </div>


        </div>

        <div className="i-right">
        <img src={Vector1} alt="loading.." />
        <img src={Vector2} alt="loading.." />
        <img src={boy} alt="loading.." />
        <img src={glassesimoji} alt="loading.." />
        <div style={{top:'-4%', left:'68%'}}>
            <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </div>

        <div style={{top:'18rem', left:'0rem'}}>
            <FloatingDiv image={thumbup} txt1='Quality' txt2='Work'/>
        </div>
        {/*blur divs*/}
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" 
        style={{
            background:'#C1F5FF',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
        }}></div>

        </div>
    </div>
  )
}
