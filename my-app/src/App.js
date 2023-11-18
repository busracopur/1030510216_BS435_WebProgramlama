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
    setUserGuess(event.target.value);
  }

  function handleGuess() {
    const guess = parseInt(userGuess, 10);

    if () {
      setMessage('Lütfen geçerli bir sayı girin.');
      return;
    }

    if () {
      setMessage('Tebrikler! Doğru tahmin!');
    } else {

    }
  }

  return (
      <div className="App">
        <h1>Sayı Tahmin Oyunu</h1>
        <p>{message}</p>
        <input
            placeholder="Bir sayı girin"
        />
        <button onClick={handleGuess}>Tahmin Et</button>
      </div>
  );
}

export default App;

