import React, { useState } from "react";

const Bat = () => {
  const [bat, setBat] = useState(0);
  return (
    <>
      <h1>Bat: {bat}</h1>
      <button type="" onClick={() => setBat(bat - 1)}>
        Sell Bat
      </button>
    </>
  );
};

export default Bat;
