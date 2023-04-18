import './App.css';
import { useState } from 'react';
import Score from './components/Score';
import Grid from './components/Grid';
function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [reset, setReset] = useState(false);

  function incrementScore() {
    setScore(score + 1);
    setReset(true);
  }
  function updateHighScore() {
    if (score > highScore)
      setHighScore(score);
  }

  function resetGame() {
    updateHighScore();
    setScore(0);
    setReset(false);
  }



  return (
    <div className="Header">
      <div className="Title" >
        <h1>Click'em All</h1>
        <p>Click on each image once to get a point, if an image is clicked on twice you lose all your points.
          <br/>Try to click on all the images once for the maximum score.</p>
      </div>
      <span><Score key="Score" score={score} highScore={highScore}></Score></span>
      <Grid key="Grid"
        incrementScore={incrementScore}
        resetGame={resetGame}
        reset={reset} ></Grid>
    </div>

  );
}


export default App;
