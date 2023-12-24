import React, { useState } from 'react';
import './App.css';

function App() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function handleInputChange(event) {
  
      const userInput = event.target.value;
      console.log('userInput:', userInput);
      setUserGuess(userInput);
  }

  function handleGuess() {
    const guess = parseInt(userGuess, 10);
      if (isNaN(guess)) {
          setMessage(' enter a valid number!');
      }
      else {
          if (guess === targetNumber) {
              setMessage('Congratulations correct guess!');
          } else if (guess < targetNumber) {
              setMessage('Try a larger number.');
          } else {
              setMessage('Try a smaller number.');
          }
      }
  }
//
    console.log('guess:', userGuess);



  return (
      <div className="App">
        <h1>Guess</h1>
        <p>{message}</p>
        <input
            placeholder="Enter a number"
            type="text"
            value={userGuess}
            onChange={handleInputChange}
        />
        <button onClick={handleGuess}>Guess</button>
      </div>
  );
}

export default App;

