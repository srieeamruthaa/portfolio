import "./HeroimgStyle.css"
import React from 'react'
import Intro from "../assets/Intro-img.jpg"
import { Link } from "react-router-dom"

const heroimge = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={Intro} alt="intropage"/>
        </div>
        <div className="content">
            <p> HI !!!</p>
            <h2></h2>
            <h1> React developer...here</h1>
            <div>
                <Link to="/project" className="btn"
                > project</Link>
                <Link to="/contact" className="btn btn-light"
                > contact</Link>
            </div>
        </div>
        </div>
  )
}

export default heroimge