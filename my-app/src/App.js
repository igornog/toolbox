import React, { useState } from "react";
import "./App.scss";
import Login from "./views/Login";

function App() {
  const [logged, setLog] = useState(false);

  return (
    <div className="App">
      {logged ? <p>logado</p> : <Login setLog={setLog} />}
    </div>
  );
}

export default App;
