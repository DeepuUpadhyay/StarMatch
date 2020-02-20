import React from "react";
import "./App.css";

const colors = {
 available: "lightgray",
 used: "lightGreen",
 wrong: "lightcoral",
 candidate: "deepskyblue"
};
const PlayNumber = props => (
 <button
  className="number grid-item"
  style={{ backgroundColor: colors[props.status] }}
  onClick={() => props.onClick(props.number, props.status)}
 >
  {props.number}
 </button>
);

export default PlayNumber;
