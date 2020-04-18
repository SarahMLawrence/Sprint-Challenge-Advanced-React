import React from 'react';
import './App.css';
// import axios from "axios";
import Navbar from './components/Navbar';
import PlayerCard from './components/PlayerCard';

class App extends React.Component {

  //constructor
  constructor() {
    super();
    this.state = {
      playerInfo: []
    };
  }

  //did mount
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(playerData => {
        console.log("Player:", playerData);
        this.setState({ playerInfo: playerData });
      })

      .catch(err => {
        console.log(err);
      })

  }

  render() {

    console.log("Rendering");

    return (

      <div>
        <h1>the Players</h1>
      <Navbar />
      <PlayerCard />
      </div>
      )

  }
}

export default App;
