import React, { Suspense } from "react";
import { Routers } from "./Routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routers />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
