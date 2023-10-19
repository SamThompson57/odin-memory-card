import './App.css';
import { useState } from 'react';
import { character } from './components/Characters';
import Body from './components/Body';
import shuffleArray from './components/shuffleArray';

const App = () => {

  const [score, setScore] = useState(0)
  const [record, setRecord] = useState(0)
  const [chars, setChars] = useState(shuffleArray(character()))

  function resetGame(){
    console.log(`Reset Game`)
    setScore(0)
    shuffle()
    }

  function addScore(){
    setScore(score+1)
    if (score >= record) setRecord(score+1)
  }

  function shuffle(){
    setChars(shuffleArray(chars))
  }

  return (
    <div className="App">
      <div id='headder'>
        <div id='title'>Clarksons Farm Animals</div>
        <div id='scoreboard'>
          <div id='currentScore'>Current Score: {score}</div>
          <div id='highScore'>High Score: {record}</div>
        </div>
        <Body chars={chars} reset={resetGame} addScore={addScore} shuffle={shuffle}/>  
      </div>
    </div>
  );
}

export default App;