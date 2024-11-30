import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Board from "./components/Board";

function App() {
  const [winner, setWinner] = useState(null);
  const [running, setRunning] = useState(false);
  return (
    <div className="app">
      {!running && <h1>Winner is {winner}</h1>}
      <Board
        row={4}
        col={4}
        setWinner={setWinner}
        setRunning={setRunning}
        running={running}
      />
    </div>
  );
}

export default App;
