import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import List from "./Components/List";
import Favourites from "./Components/Favourites";
import Navbar_Bootstrap from "./Components/Navbar_Bootstrap";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar_Bootstrap />
      <Banner />
      <List />
      {/* <Favourites /> */}
    </div>
  );
}

export default App;
