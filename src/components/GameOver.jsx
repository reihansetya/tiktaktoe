import React from "react";

export const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} wins!</p>}
      {!winner && <p>Its Draw</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};
