import { FaHome , FaPhone , FaMailBulk, FaFacebook} from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'
import { FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
           <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                <div>
                <p> Bangalore</p>
                <p>India</p>
             </div>
           </div>
          < div className="phone">
          <h4>
          <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
               1-2323-343-23
          </h4>
    </div>
    < div className="email">
          <h4>
          <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
               sr@gmail.com
          </h4>
    </div>
           </div>

           <div className="right">
            <p>
              Hi im a react developer and Im doing this Portfolio.To help me understand more about react.js
              </p>
              <div className="social"> 
               <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
              <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
               </div>
           </div>
        </div>
    </div>
    
  )
}

export default Footer