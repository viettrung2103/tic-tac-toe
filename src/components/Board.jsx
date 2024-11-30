import { useEffect, useState } from "react";
import Square from "./Square";

const Board = ({ row, col, setWinner, running, setRunning }) => {
  const [count, setCount] = useState(0);
  const [squares, setSquares] = useState([]);
  const [boardCreated, setBoardCreate] = useState(false);

  const createGrid = (row, col) => {
    const grid = [];
    for (let i = 0; i < row; i++) {
      const row = [];
      for (let j = 0; j < col; j++) {
        row.push(null);
      }
      grid.push(row);
    }
    setSquares(grid);
  };

  const checkWinner = (player) => {
    // let player = "X";
    // isWin = false;
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

  // init board
  useEffect(() => {
    createGrid(row, col);
    setBoardCreate((bc) => true);
    setRunning((r) => true);
  }, []);

  //check winner
  useEffect(() => {
    if (boardCreated) {
      if (checkWinner("X")) {
        console.log("X win");
        setWinner("X");
        setRunning((r) => false);
      } else if (checkWinner("O")) {
        console.log("O win");
        setWinner("O");
        setRunning((r) => false);
      }
    }
  }, [squares]);

  const handleClick = (rowIndex, colIndex) => {
    if (running) {
      console.log(`click pos(${rowIndex}, ${colIndex})`);
      const newSquares = [...squares];
      if (count % 2 === 0) {
        newSquares[rowIndex][colIndex] = "X";
      } else {
        newSquares[rowIndex][colIndex] = "O";
      }
      setCount((c) => c + 1);
      setSquares((s) => newSquares);
    }
  };

  return (
    <div>
      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${col}, 100px)`,
          gridTemplateRows: `repeat(${row}, 100px)`,
          gap: "4px",
          backgroundColor: "#fff",
          padding: "8px",
        }}
      >
        {squares.map((row, rowIndex) => (
          <div key={rowIndex} className="row" style={{ display: "contents" }}>
            {row.map((col, colIndex) => (
              <div key={colIndex} className="col">
                {/* {
                  (console.log("row ", row, " ,collumn ", col),
                  console.log("row idx ", rowIndex, " ,collumn idx", colIndex))
                } */}
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
    </div>
  );
};
export default Board;
