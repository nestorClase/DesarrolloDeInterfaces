import React from 'react';
import './App.css';
import Tablero from './components/Tablero'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Juego de Memoria</h1>
      </header>
      <main>
        <Tablero /> {}
      </main>
    </div>
  );
}

export default App;
