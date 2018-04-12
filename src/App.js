import React, { Component } from "react";
import Picture from "./components/Picture";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import pictures from "./pictures.json";
import "./App.css";

let currScore = 0;
let highScore = 0;

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures,
    currScore,
    highScore
  };

  clickPicture = id => {
    // Filter this.state.pictures for pictures with an id equal to the picture being clicked
    const clickedPictures = this.state.pictures.filter(picture => picture.id === id);

    // is that is an unclicked picture
    if (clickedPictures[0].clicked === false) {
      // set this.state.pictures equal to the new pictures array and change clicked to true
      this.setState({ currScore: this.state.currScore + 1 });
      clickedPictures[0].clicked = true;

      // check for win
      if(this.state.currScore === 11){
        alert('Winner!');
        // reset all pictures clicked values to false
        // pictures = this.state.pictures.map(picture => picture.clicked = false);
      }

      // check for new high score and update 
      if(this.state.currScore > this.state.highScore){
        this.setState({ highScore: this.state.currScore});
      }
      // reset current score
      this.setState({ currScore: 0 });
    }
    // oops, that one was clicked already
    else {
      alert('OOPS - you clicked that one before...');
      this.setState({ currScore: 0 })
    }
  };

  // Map over this.state.pictures and render a Picture component for each picture object
  render() {
    return (
      <Wrapper>
        <Banner 
          title='Bonaire Marine Life'
          currScore = {this.state.currScore}
          highScore = {this.state.highScore} 
        />
        {this.state.pictures.map(picture => (
          <Picture
            id={picture.id}
            key={picture.id}
            image={picture.image}
            clickPicture = {this.clickPicture}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
