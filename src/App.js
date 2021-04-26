import React, { useState } from "react";
import "./App.scss";
import Login from "./views/Login";
import Home from "./views/Home";

function App() {
  const [logged, setLog] = useState(false);

  return (
    <div className="App">
      {logged ? <Home /> : <Login setLog={setLog} />}
    </div>
  );
}

export default App;
