import React from 'react';


class PlayerCard extends React.Component {

    //constructor

    constructor() {
        super();
        this.state = {

            playerData: []


        };

    }





    //did mount

    componentDidMount() {

        fetch('http://localhost:5000/api/players')

            .then(res => res.json())

            .then(player => {

                console.log("player:", player);

                this.setState({ playerData: player });

            })

            .catch(err => {

                console.log(err);

            })

    }







    render() {

        console.log("Rendering");

        // console.log(this.state);

        return (

            <div className="playerCard">
                <h2>Player</h2>

                {Array.isArray(this.state.playerData) && this.state.playerData.map(play => {





                    return <div className="players" key={play.name}>
                        
                        <h3>{play.name}</h3>
                        <p>{play.country}</p>
                        <p>{play.searches}</p>
                    </div>



                })}





            </div>)

    }



}





export default PlayerCard;
