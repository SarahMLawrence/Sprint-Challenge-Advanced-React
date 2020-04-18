import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import Charts from "./components/Charts";

const App = () => {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    axios

      .get("http://localhost:5000/api/players")

      .then((res) => setPlayerData(res.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <PlayerCard />

      <Charts playerData={playerData}/>
    </div>
  );
};

export default App;