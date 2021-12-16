import React, { useState } from "react";

const Comp = () => {
  const [Box, setBox] = useState(0);
  const changeReverse = () => {
    setBox(Box === 3 ? 0 : Box + 1);
  };

  const changeNext = () => {
    setBox(Box === 0 ? 3 : Box - 1);
  };
  return (
    <>
      <div className="container">
        <div className={`inner position${Box}`}></div>
      </div>

      <button onClick={() => changeReverse()}>Next</button>
      <button onClick={() => changeNext()}>Back</button>
    </>
  );
};

export default Comp;
