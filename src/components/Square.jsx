import { useEffect, useState } from "react";

const Square = ({ rowIdx, colIdx, handleClick, squares }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(squares[rowIdx][colIdx]);
  }, [squares]);

  
  const handleButtonClick = () => {
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
