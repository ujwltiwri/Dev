import React, { useEffect, useState } from "react";

function Ue1() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(10);

  //useEffect = componentDidMount + componentDidUpdate

  useEffect(() => {
    //Here useEffect is behaving like ComponentDidMount As Well As ComponentDidUpdate
    console.log("useEffect is Called");
    document.title = `Button is Clicked ${count} times`;
  });

  console.log("Render Method");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export default Ue1;
