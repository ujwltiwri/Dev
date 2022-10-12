import React, { useState } from "react";

const Us = () => {
  const [val, setVal] = useState(0);
  return (
    <>
      <button onClick={() => setVal(val + 1)}>
        <h1>+</h1>
      </button>
      <h1>{val}</h1>
      <button onClick={() => setVal(val - 1)}>
        <h1>-</h1>
      </button>
    </>
  );
};

export default Us;
