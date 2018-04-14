import React from 'react';
import './Banner.css';

const Banner = props => (
  <div className="banner">
    <h1 className="title"> {props.title}</h1>
    <div className="scores">Current Score: {props.currScore}   High Score: {props.highScore}</div>
    <div id="message">{ props.message ? props.message : 'Click each picture just once!'}  </div>
    <br />
  </div>
);

export default Banner;
