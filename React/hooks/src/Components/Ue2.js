import React, { useState, useEffect } from "react";

const Ue2 = () => {
  const [count, setCount] = useState(0);
  //Here useEffect is Behaving Like componentDidMount
  //this variation of useEffect is needed when we want useEffect to behave like componentDidMount i.e we need to do some side effect calls -> i.e. we need to some work which will be done on side and it won't affect the current flow of code

  useEffect(() => {
    console.log("useEffect is Called");
    document.title = `Button is Clicked ${count} times`;
  }, []);

  console.log("Render Method");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>+</button>
    </>
  );
};

export default Ue2;
