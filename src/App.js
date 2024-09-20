import React from "react";
import Building from "./Images/Building.jpg";
import Lobby from "./Images/Lobby.jpg";

function App() {
  return (
    <div className="app">
      <img src={Building} alt="Building" />
      <img src={Lobby} alt="Lobby" />
    </div>
  );
}

export default App;
