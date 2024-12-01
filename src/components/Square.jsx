import { useEffect, useState } from "react";

const Square = ({ rowIdx, colIdx, handleClick, squares }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    // console.log("reset ", isReset);
    setValue(squares[rowIdx][colIdx]);
  }, [squares]);

  
  const handleButtonClick = () => {
    // console.log("clicked", rowIdx, colIdx);
    handleClick(rowIdx, colIdx);
    setValue(squares[rowIdx][colIdx]);
  };

  return (
    <button
      className="square"
      onClick={handleButtonClick}
    >
      {value}
    </button>
  );
};

export default Square;
