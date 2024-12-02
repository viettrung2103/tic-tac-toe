import { useState } from "react";

const CreateBoard = ({
  row,
  setRow,
  col,
  setCol,
  setPressCreate,
  
}) => {
  const [rowInput, setRowInput] = useState(row);
  const [colInput, setColInput] = useState(col);

  const handleColChange = (e) => {
    setColInput((ci) => e.target.value);
  };
  const handleRowChange = (e) => {
    setRowInput((ri) => e.target.value);
  };

  const handleCreateBoard = () => {
    setCol((c) => colInput);
    setRow((r) => rowInput);
    setPressCreate((pc) => true);
  };

  return (
    <div className="create-container">
      <div>CreateBoard</div>
      <div className="input">
        <label>Row: </label>
        <input
          type="number"
          name="row"
          value={rowInput}
          onChange={handleRowChange}
          id="row"
        />
      </div>
      <div className="input">
        <label>Column: </label>
        <input
          type="number"
          name="column"
          onChange={handleColChange}
          id="column"
          value={colInput}
        />
      </div>
      <button onClick={handleCreateBoard}>Create</button>
    </div>
  );
};
export default CreateBoard;
