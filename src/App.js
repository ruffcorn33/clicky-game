import React, { Component } from 'react';
import Picture from './components/Picture';
import Wrapper from './components/Wrapper';
import Banner from './components/Banner';
import OrigPics from './pictures.json';
import './App.css';

const currScore = 0;
const highScore = 0;
const pictures = OrigPics;
let highScoreBucket = 0;

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures,
    currScore,
    highScore,
    message: 'Click each of the pictures just once.',
  };

  handleClick = (id) => {
    // Filter this.state.pictures for pictures with an id equal to the picture being clicked
    const Pictures = this.state.pictures.filter(picture => picture.id === id);

    // this is an unclicked picture
    if (Pictures[0].clicked === false) {
      this.setState({ message: 'Good Guess!' });
      // set this.state.pictures equal to the new pictures array
      this.setState({ currScore: this.state.currScore + 1 });
      // check for new high score and update
      if (this.state.currScore > this.state.highScore) {
        highScoreBucket = this.state.currScore;
        this.setState({ highScore: this.state.currScore });
      }
      // change clicked to true
      Pictures[0].clicked = true;

      // check for win
      if (this.state.currScore >= 11) {
        // alert('Winner!');
        this.setState({
          pictures: OrigPics,
          currScore: 0,
          highScore: highScoreBucket,
          message: 'You Win!',
        });
      }
    } else {
      // oops, that one was clicked already
      this.setState({
        pictures: OrigPics,
        currScore: 0,
        highScore: highScoreBucket,
        message: 'OOPS! - you clicked that one before...',
      });
      // this.setState({ message: "OOPS! - you clicked that one before..."})
    }

    // random sort the pictures array
    pictures.sort(() => 0.5 - Math.random());
  };

  // Map over this.state.pictures and render a Picture component for each picture object
  render() {
    return (
      <Wrapper>
        <Banner
          title="Marine Life Memory Quiz"
          currScore={this.state.currScore}
          highScore={this.state.highScore}
          message={this.state.message ? this.state.message : 'Click each picture just once!'}
        />
        {this.state.pictures.map(picture => (
          <Picture
            id={picture.id}
            key={picture.id}
            image={picture.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
