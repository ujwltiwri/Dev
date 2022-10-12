import React, { useEffect, useState } from "react";

const Infinite = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is called");
    document.title = `Button is Clicked ${count} times`;
    let rnum = Math.random() * 100;
    // setCount(rnum); /* Here State Will Change Every Time cuz of rnum being updated each time & As setCount has Primitive Value & as there is Change every time in this primitive value so State Changes each time -> Then Render Method is Called -> Then Again as the value of rnum changes, State Changes Again -> Then Again Render Method is Called & Then State Changes -> and it goes into infinite loop */
    // setCount(13); /* Here State Won't Change Because setCount has Primitive Value & as there is no Chnage in this primitive value so State Won't Change and UseEffect will be Called Only Once */
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Infinite;
