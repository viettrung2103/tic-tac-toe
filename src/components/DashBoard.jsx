import { useState, useEffect } from "react";

const DashBoard = ({
  winner,
  isDraw,
  totalGames,
  running,
  count,
  pressCreate,
  boardCreated,
}) => {
  const [xWinNum, setXWinNum] = useState(0);
  const [oWinNum, setOWinNum] = useState(0);
  const [playerStart, setPlayerStart] = useState("X");

  useEffect(() => {
    console.log("winner in useEffect", winner);
    console.log("xWinNum", xWinNum);
    console.log("oWinNum", oWinNum);
    setPlayer();
    incrementWinNum();
  }, [winner, running]);

  const incrementWinNum = () => {
    console.log("is running", running);
    if (winner === "X") {
      console.log("X win");
      setXWinNum((x) => x + 1);
    } else if (winner === "O") {
      console.log("O win");
      setOWinNum((o) => o + 1);
    }
  };

  const setPlayer = () => {
    if (isTotalGameEven()) {
      setPlayerStart((p) => "X");
    } else {
      setPlayerStart((p) => "O");
    }
  };

  const playerXStart = () => {
    return playerStart === "X";
  };

  const playerOStart = () => {
    return playerStart === "O";
  };

  const isTotalGameEven = () => {
    if (totalGames % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  const isCountEven = () => {
    return count % 2 === 0;
  };

  const getPlayerTurn = () => {
    if (playerXStart()) {
      return isCountEven() ? "X" : "O";
    } else {
      return isCountEven() ? "O" : "X";
    }
  };

  return (
    <div className="header">
      <div className="dashboard">
        <div
          className={`winner-container ${
            playerXStart() && running
              ? isCountEven()
                ? "player-turn"
                : ""
              : running
              ? !isCountEven()
                ? "player-turn"
                : ""
              : ""
          }`}
        >
          <p>X</p>
          <p>{xWinNum === 0 ? "-" : xWinNum}</p>
        </div>
        <div
          className={`winner-container  ${
            playerOStart() && running
              ? isCountEven()
                ? "player-turn"
                : ""
              : running
              ? !isCountEven()
                ? "player-turn"
                : ""
              : ""
          }`}
        >
          <p>O</p>
          <p>{oWinNum === 0 ? "-" : oWinNum}</p>
        </div>
      </div>
      <div className="player-turn-text">
        {boardCreated && <p>{getPlayerTurn()} Turn</p>}
      </div>
    </div>
  );
};
export default DashBoard;
