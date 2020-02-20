import React, { useState } from "react";
import Game from "./Game";

const StarMatch = () => {
 const [gameId, setGameId] = useState(1);
 const startNew = () => {
  setGameId(gameId + 1);
 };
 return <Game key={gameId} startNewGame={startNew} />;
};

export default StarMatch;
