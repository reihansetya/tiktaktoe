import { GameBoard } from "./components/GameBoard";
import { Log } from "./components/Log";
import { Player } from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";
import { GameOver } from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O";
    }

    return currentPlayer;
  }
  function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map((board) => [...board])];

    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
    }

    return gameBoard;
  }

  function deriveWinner(gameBoard, players) {
    let winner;

    for (const combinations of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combinations[0].row][combinations[0].column];
      const secondSquareSymbol =
        gameBoard[combinations[1].row][combinations[1].column];
      const thirdquareSymbol =
        gameBoard[combinations[2].row][combinations[2].column];

      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdquareSymbol
      ) {
        winner = players[firstSquareSymbol];
      }
    }

    return winner;
  }

  function handleChange(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerChangeName(symbol, newName) {
    setPlayers((prevPlayer) => {
      return { ...prevPlayer, [symbol]: newName };
    });
  }

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;
  const activePlayer = deriveActivePlayer(gameTurns);

  return (
    <main>
      <header>
        <img src="game-logo.png" alt="logo tictacitoe" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerChangeName}
          />
          <Player
            name={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerChangeName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleChange} board={gameBoard} />
      </div>
      <Log logTurns={gameTurns} />
    </main>
  );
}

export default App;
