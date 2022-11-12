import React, { useState, useEffect } from "react";

const Ue3 = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState({ sayHi: "I Am Hooked" });

  //This useEffect will be called on ComponentDidMount + ComponentDidUpdate
  useEffect(() => {
    console.log("useEffect is Called");
  });

  //This useEffect will be called Only When Count State is Changed
  useEffect(() => {
    console.log("useEffect of count is called");
    document.title = `Button is clicked ${count} times`;
  }, [count]);

  //This useEffect will be called Only When Msg State is Changed
  useEffect(() => {
    console.log("useEffect of Msg is called");
  }, [msg]);

  let handleMsg = (e) => {
    msg.sayHi = e.target.value;
    setMsg({ ...msg });
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <input type="text" value={msg.sayHi} onChange={(e) => handleMsg(e)} />
    </div>
  );
};

export default Ue3;
