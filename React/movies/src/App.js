import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import List from "./Components/List";
import Favourites from "./Components/Favourites";
import Navbar_Bootstrap from "./Components/Navbar_Bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar_Bootstrap />
      <Banner />
      <List /> */}
      {/* <Favourites /> */}

      <BrowserRouter>
        <Navbar_Bootstrap />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <List />
              </>
            }
          />
          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
