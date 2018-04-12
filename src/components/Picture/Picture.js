import React from "react";
import "./Picture.css";

const Picture = props => (
  <div className="img-container">
    <img alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)} />
  </div>
);

export default Picture;
