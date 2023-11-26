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
          setMessage('Lütfen geçerli bir sayı girin.');
      }
      else {
          if (guess === targetNumber) {
              setMessage('Tebrikler! Doğru tahmin!');
          } else if (guess < targetNumber) {
              setMessage('Daha büyük bir sayı deneyin.');
          } else {
              setMessage('Daha küçük bir sayı deneyin.');
          }
      }
  }

    console.log('guess:', userGuess);

  return (
      <div className="App">
        <h1>Tahmin Oyunu</h1>
        <p>{message}</p>
        <input
            placeholder="Bir sayı girin"
            type="text"
            value={userGuess}
            onChange={handleInputChange}
        />
        <button onClick={handleGuess}>Tahmin Et</button>
      </div>
  );
}

export default App;

