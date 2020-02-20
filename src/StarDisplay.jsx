import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import utils from "./utils";
import "./App.css";

const StarsDisplay = props => {
 return (
  <div className="grid-container">
   {utils.range(1, props.count).map(starId => (
    <div key={starId} className="grid-item">
     <FontAwesomeIcon icon={faStar} />
    </div>
   ))}
  </div>
 );
};

export default StarsDisplay;
