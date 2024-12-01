import { useEffect, useState } from "react";
import Square from "./Square";

const Board = ({
  row,
  col,
  winner,
  setWinner,
  running,
  setRunning,
  setIsWin,
  setIsDraw,
  totalGames,
  setTotalGames,
  count,
  setCount,
  boardCreated,
  setBoardCreated,
  setPressCreate,
  pressCreate,
}) => {
  // const [count, setCount] = useState(0);
  const [squares, setSquares] = useState([]);
  // const [boardCreated, setBoardCreated] = useState(false);

  const createGrid = (row, col) => {
    const grid = [];
    for (let i = 0; i < row; i++) {
      const row = [];
      for (let j = 0; j < col; j++) {
        row.push(null);
      }
      grid.push(row);
    }
    return grid;
    // setSquares((s) => grid);
  };

  const checkWinner = (player) => {
    if (checkRowWin(player)) {
      return true;
    }
    if (checkColWin(player)) {
      return true;
    }
    if (checkTopCrossWin(player)) {
      return true;
    }
    if (checkBottomCrossWin(player)) {
      return true;
    }
    return false;
  };

  const checkRowWin = (player) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (j + 2 < col) {
          if (
            squares[i][j] === player &&
            squares[i][j + 1] === player &&
            squares[i][j + 2] === player
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const checkColWin = (player) => {
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (j + 2 < row) {
          if (
            squares[j][i] === player &&
            squares[j + 1][i] === player &&
            squares[j + 2][i] === player
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const checkTopCrossWin = (player) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (i + 2 < row && j + 2 < col) {
          if (
            squares[i][j] === player &&
            squares[i + 1][j + 1] === player &&
            squares[i + 2][j + 2] === player
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const checkBottomCrossWin = (player) => {
    for (let i = row - 1; i >= 0; i--) {
      for (let j = 0; j < col; j++) {
        if (i - 2 >= 0 && j + 2 < col) {
          if (
            squares[i][j] === player &&
            squares[i - 1][j + 1] === player &&
            squares[i - 2][j + 2] === player
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const checkDraw = () => {
    // isDraw = false;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (squares[i][j] === null) {
          // if there is empty cell; return
          return false;
        }
      }
    }
    // when all cell is filled, return true
    return true;
  };

  const handleReset = () => {
    console.log("reset");

    setCount((c) => 0);
    setRunning((r) => true);
    setIsWin((iw) => false);
    setIsDraw((d) => false);
    // setWinner((w) => null);
    setSquares(createGrid(row, col));
  };

  // init board
  useEffect(() => {
    // reset board
    if (pressCreate) {
      setSquares((s) => createGrid(row, col));

      setBoardCreated((bc) => true);
      setRunning((r) => true);
      setIsDraw((d) => false);
      setIsWin((iw) => false);
      setWinner((w) => null);
      setCount((c) => 0);
      setPressCreate((pc) => false);
    }
    // if (!boardCreated) {
    // }
  }, [pressCreate]);

  //check winner
  useEffect(() => {
    if (boardCreated && running) {
      if (checkWinner("X")) {
        setWinner("X");
        setIsWin((w) => true);
        setRunning((r) => false);
        setTotalGames((g) => g + 1);
      } else if (checkWinner("O")) {
        setWinner("O");
        setIsWin((w) => true);
        setRunning((r) => false);
        setTotalGames((g) => g + 1);
      } else if (checkDraw()) {
        setIsDraw((d) => true);
        setRunning((r) => false);
        setTotalGames((g) => g + 1);
      }
    }
  }, [squares]);

  const handleClick = (rowIndex, colIndex) => {
    if (running) {
      console.log(`click pos(${rowIndex}, ${colIndex}, )`);
      const newSquares = [...squares];

      // make sure clicked cell cannot be changed
      if (newSquares[rowIndex][colIndex] == null) {
        if (count % 2 === 0) {
          newSquares[rowIndex][colIndex] = isTotalGameEven() ? "X" : "O";
        } else {
          newSquares[rowIndex][colIndex] = isTotalGameEven() ? "O" : "X";
        }
        setCount((c) => c + 1);
        setSquares((s) => newSquares);
      }
    }
  };

  const isTotalGameEven = () => {
    if (totalGames % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${col}, 100px)`,
          gridTemplateRows: `repeat(${row}, 100px)`,
          gap: "4px",

          padding: "8px",
          border: "none",
          gridGap: "2",
        }}
      >
        {squares.map((row, rowIndex) => (
          <div key={rowIndex} className="row" style={{ display: "contents" }}>
            {row.map((col, colIndex) => (
              <div key={colIndex} className="col grid-item ">
                <Square
                  handleClick={handleClick}
                  rowIdx={rowIndex}
                  colIdx={colIndex}
                  squares={squares}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="reset-container">
        <button className="reset-btn" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
};
export default Board;
