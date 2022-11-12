import logo from "./logo.svg";
import "./App.css";
import Us from "./Components/Us";
import Ue1 from "./Components/Ue1";
import Ue2 from "./Components/Ue2";
import Infinite from "./Components/Infinite";
import Ue3 from "./Components/Ue3";

import context from "./Components/Context";
import Navbar from "./Components/Navbar";
import Parent1 from "./Components/Parent1";
import Parent2 from "./Components/Parent2";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <>
      {/* useState and useEffect -> All Variations Example */}
      {/* <Us /> */}
      {/* <Ue1 /> */}
      {/* <Ue2 /> */}
      {/* <Infinite /> */}
      {/* <Ue3 /> */}
      {/* Context Api Example */}
      <context.Provider value={theme}>
        <button onClick={() => setTheme(!theme)}>
          Click Me to Change Theme
        </button>
        <Navbar />
        <Parent1 />
        <Parent2 />
      </context.Provider>
    </>
  );
}

export default App;
