import React, { Component } from "react";
import FreddieCard from "./components/freddieCard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import freddie from "./freddie.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    freddie
  };

  removeFreddie = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const freddie = this.state.freddie.filter(freddie => freddie.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ freddie });
  };

  // Map over this.state.friends and render a freddieCard component for each friend object
  render() {
    return (
      <div>

      <Wrapper>
        <Title>Freddie List</Title>
        {this.state.freddie.map(freddie => (
          <FreddieCard
            removeFreddie={this.removeFreddie}
            id={freddie.id}
            key={freddie.id}
            image={freddie.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
