# React Memory App
### A memory game created with React.js

<img src="public/assets/images/gameplay.gif" width="400" height="400" />

**How to Play**

The object of this game is to click each of the images just once.  Each time an image is clicked, the pictures re-sort into a random order on the page.  Once an image is clicked twice, the current score resets to zero.

**Technologies used**

  - React
  - Express
  - Mongo/ Mongoose
  - Body-parser

Additionally, Eslint was used in development to help format the React code.

**Known issues**

- Gameplay is currently not repeatable without refreshing the screen. Code for reloading the images array from the .json file is not working.
- High Score is one behind the current score.
- Need to improve styling.
