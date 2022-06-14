import { useState } from 'react';
import './App.css';
import backgroundImg from './Images/background.jpg';
//import dropdowns

//import nameinput/instructionsform/foodimages
import NameInput from './Components/NameInput.js';
import InstructionForm from './Components/InstructionForm.js';

function App() {
  //all states
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('valued customer');
  const [extraInstructions, setExtraInstructions] = useState(['no fortune cookie', 'extra utensils']);

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
        {/* Name Input */}
        <NameInput setOrderName={setOrderName}/>
        {/* Food Dropdown */}
        {/* Side Dropdown */}
        {/* Beverage Dropdown */}
        {/* Instructions Form */}
        <InstructionForm 
          extraInstructions={extraInstructions}
          setExtraInstructions={setExtraInstructions}/>
        <h3>hey {orderName}, here is your order so far: </h3>
        {/* Food Images (order images) */}
      </div>
      <ul className='instructions-list'>
        {
          extraInstructions.map((instruction, i) => <li key={`${instruction}-${i}`}>
            {instruction}
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
