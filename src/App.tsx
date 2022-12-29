import React from "react";
import { Routers } from "./Routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import {Footer} from './components/Footer'
import "./styles/index.scss";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Routers />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
