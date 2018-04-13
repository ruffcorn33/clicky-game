import React from "react";
import "./Picture.css";

const Picture = props => (
  <div id="images-wrapper">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} />
    </div>
  </div>  
);

export default Picture;
