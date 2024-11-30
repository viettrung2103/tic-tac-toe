import { useState } from "react";

const Square = ({ rowIdx, colIdx, handleClick, squares }) => {
  const [value, setValue] = useState(null);

  const handleButtonClick = () => {
    // console.log("clicked", rowIdx, colIdx);
    handleClick(rowIdx, colIdx);
    setValue(squares[rowIdx][colIdx]);
  };

  return (
    <button
      className="square"
      onClick={handleButtonClick}
      style={{
        width: "100px",
        height: "100px",
        fontSize: "24px",
        fontWeight: "bold",
        border: "2px solid #333",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    >
      {value}
    </button>
  );
};

export default Square;
