import "./NavbarStyle.css";
import {FaBars,FaTimes} from "react-icons/fa"
import React, { useState } from 'react'
 import { Link } from "react-router-dom"
 import resume from '../assets/cv_for_portfolio.pdf'
 import { FaDownload } from "react-icons/fa";

 
 const Navbar = () => {

    const[click,setClick]=useState(false);
    const handleClick = () =>setClick(!click)
      
    const[color,setColor] = useState(false);
    const changeColor =() =>{
        if(window.scrollY >=1){
            setColor(true);

        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);

   return (
     <div className={color ? "header header-bg":"header"}>
        <Link to="/">
        <h1>Portfolio</h1>
        </Link>
        
        <ul className={click ?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
          <button className="cv">
            <a href={resume} download="resume">Resume
            <FaDownload size={20} style={{ color: "#fff", marginLeft: "0.5rem" }} />
            </a>
          </button>
        </li>
                
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}}/>)
            :
            (<FaBars size={20} style={{color:"#fff"}}/>)}
              
        </div>

        </div>

     
   )
 }
 
 export default Navbar