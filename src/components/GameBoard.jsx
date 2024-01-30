export const GameBoard = ({ onSelectSquare, board }) => {
  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updateBoard = [...prevGameBoard.map((inset) => [...inset])];
  //     updateBoard[rowIndex][colIndex] = activeSymbol;
  //     console.log(updateBoard);
  //     return updateBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
