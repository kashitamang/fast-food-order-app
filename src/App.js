import { useState } from 'react';
import './App.css';
import backgroundImg from './Images/background.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${backgroundImg})` }}>
      </header>
      <div className="info-container">
        <h1>Best Noodle 24/7</h1>
        <h3>⭐ 4.5 🥡  Asian Fusion</h3>
        <h4 className="hours">open 24/7 · delivery · pickup · vegetarian options</h4>
      </div>
      <div className="order-container">
        <div></div>
      </div>
    </div>
  );
}

export default App;
