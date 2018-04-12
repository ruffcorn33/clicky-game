import React from "react";
import "./Banner.css";

const Banner = props => (
  <div className="banner">
    <h1 className="title"> {props.title}</h1>
    <span>Current Score: {props.currScore}   High Score: {props.highScore}</span>
    <br/>  
  </div>  
);  

export default Banner;
