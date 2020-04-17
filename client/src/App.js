import React from 'react';
import logo from './logo.svg';
import './App.css';

import "PlayerCard" from "./co"

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
        <div className="playerCard">
          <h3>{this.state.plyaerInfo.name}</h3>
          <p>{this.state.playerInfo.country}</p>
          <p>{this.state.playerInfo.searches}</p>

        </div>

      </div>
      )

  }
}

export default App;
