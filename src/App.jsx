import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Board from "./components/Board";
import DashBoard from "./components/DashBoard";

function App() {
  const [winner, setWinner] = useState(null);
  const [running, setRunning] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [totalGames, setTotalGames] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <DashBoard
        winner={winner}
        isDraw={isDraw}
        totalGames={totalGames}
        running={running}
        count={count}
      />
      {!running && <h1>Game Over</h1>}
      {isWin ? <h1>Winner is {winner}</h1> : isDraw && <h1>Draw</h1>}

      <Board
        row={3}
        col={3}
        count={count}
        setCount={setCount}
        winner={winner}
        setWinner={setWinner}
        setRunning={setRunning}
        setIsWin={setIsWin}
        setIsDraw={setIsDraw}
        running={running}
        totalGames={totalGames}
        setTotalGames={setTotalGames}
      />
    </div>
  );
}

export default App;
