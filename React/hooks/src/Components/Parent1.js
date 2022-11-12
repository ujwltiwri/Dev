import React, { useContext } from "react";
import context from "./Context";
import Child from "../Child";

function Parent1() {
  const theme = useContext(context);
  console.log("Parent 1 ", theme);
  return (
    <div className={theme ? "dark" : "light"}>
      Parent1 <Child theme={theme} />
    </div>
  );
}

export default Parent1;
