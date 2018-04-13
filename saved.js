class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures,
    currScore,
    highScore,
    message: "Click each of the pictures just once."
  };

  handleClick = id => {
    // Filter this.state.pictures for pictures with an id equal to the picture being clicked
    const Pictures = this.state.pictures.filter(picture => picture.id === id);

    // this is an unclicked picture
    if (Pictures[0].clicked === false) {

      const curr_score = currScore++;
      const high_score = curr_score > highScore ? curr_score : highScore;
      let newMessage = "";
      // check for a win
      if (curr_score === 12) {
        // alert('Winner!');
        newMessage = "You Won";
        this.setState({ currScore: 0 });
      }
      else {
        newMessage = "Good Guess!"
      };
      // change clicked to true
      Pictures[0].clicked = true;
      // random sort the pictures
      // Pictures.sort(() => 0.5 - Math.random());

      return this.setState({ 
        pictures: this.Pictures,
        currScore: curr_score,
        highScore: high_score,
        message: newMessage
      });
    }