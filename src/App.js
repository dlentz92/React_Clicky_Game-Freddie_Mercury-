import React, { Component } from "react";
import FreddieCard from "./components/freddieCard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import freddie from "./freddie.json";
import Jumbotron from 'react-bootstrap/Jumbotron'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    freddie,
    score: 0,
    highscore: 0,
    clicked: [],
    message: ""
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert('Game Over :{\this.state.score)}');
    this.setState({ score: 0 });
  }


  clickCount = id => {

    console.log("clicked image id: ", id)

    if (this.state.clicked.indexOf(id) === -1) {
      console.log("greattttttt")
      let tempClicked = this.state.clicked
      tempClicked.push(id)
      let freddiesTemp = this.state.freddie.sort(() => Math.random() - 0.5)
      let tempScore = this.state.score + 1
      let topScoreTemp = tempScore > this.state.highscore ? tempScore : this.state.highscore
      this.setState({
        score: tempScore,
        freddie: freddiesTemp,
        clicked: tempClicked,
        message: "YOU WIN",
        highscore: topScoreTemp


      })

    }
    else {
      console.log("loooooooooserrrrr")
      this.setState({
        score: 0,
        clicked: [],
        freddie: this.state.freddie.sort(() => Math.random() - 0.5),
        message: "YOU LOOSE"
      })

    }
  }


  // Map over this.state.friends and render a freddieCard component for each friend object

  // BUILDING HTML
  render() {
    return (
      <div>

        <Wrapper>
          <Jumbotron fluid id="jumbotron">
            <Title>Freddie List: Current Score: {this.state.score} | Top Score: {this.state.highscore}</Title>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
    </p>

          </Jumbotron>
          <div className="row">
            {this.state.freddie.map(freddie => (

              <FreddieCard
                clickCount={this.clickCount}
                id={freddie.id}
                key={freddie.id}
                image={freddie.image}
              />

            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
