import { useState } from "react";
import "./App.css";

import Board from "./components/Board";
import DashBoard from "./components/DashBoard";
import CreateBoard from "./components/CreateBoard";

function App() {
  const [winner, setWinner] = useState(null);
  const [running, setRunning] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [totalGames, setTotalGames] = useState(0);
  const [count, setCount] = useState(0);
  const [row, setRow] = useState(3);
  const [col, setCol] = useState(3);
  const [boardCreated, setBoardCreated] = useState(false);
  const [pressCreate, setPressCreate] = useState(false);
  return (
    <div className="app">
      <CreateBoard
        row={row}
        setRow={setRow}
        col={col}
        setCol={setCol}
        boardCreated={boardCreated}
        setBoardCreated={setBoardCreated}
        setPressCreate={setPressCreate}
      />
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
        row={row}
        col={col}
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
        boardCreated={boardCreated}
        pressCreate={pressCreate}
        setPressCreate={setPressCreate}
        setBoardCreated={setBoardCreated}
      />
    </div>
  );
}

export default App;
