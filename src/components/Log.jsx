import React from "react";

export const Log = ({ logTurns }) => {
  return (
    <>
      <ol id="log">
        {logTurns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player}selected{turn.square.row},{turn.square.col}
          </li>
        ))}
      </ol>
    </>
  );
};
