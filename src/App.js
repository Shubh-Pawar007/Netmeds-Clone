import logo from "./logo.svg";
import "./App.css";

import { Navbar, SubNav } from "./Components/Navbar";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <SubNav /> */}
      <Home />
    </div>
  );
}

export default App;
