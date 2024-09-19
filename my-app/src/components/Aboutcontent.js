import './Aboutcon.css'

import React from 'react'

import { Link } from 'react-router-dom';
import React1 from '../assets/about1.webp';
import React2 from '../assets/about2.webp'
const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a React front-end developer .I create responsive, secure websites for my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={ React1} className="img" alt='true'/>
                
            </div>
            <div className="img-stack bottom">
                <img src={ React2} className="img" alt='true'/>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
