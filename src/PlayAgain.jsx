import React from "react";

const PlayAgain = props => {
 const start = () => {
  props.onClick();
 };
 return (
  <div className="game-done">
   <div
    className="message"
    style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
   >
    {props.gameStatus === "lost" ? "GameOver" : "Nice"}
   </div>
   <button onClick={start}>PlayAgain</button>
  </div>
 );
};

export default PlayAgain;
