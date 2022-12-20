import React from "react";
import { Routers } from "./Routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        
        <Routers />
      </Router>
    </div>
  );
}

export default App;
