import { useState } from 'react';
import './App.css';
import backgroundImg from './Images/background.jpg';
//import dropdowns
import FoodDropDown from './Components/FoodDropdown';
import DrinkDropDown from './Components/DrinkDropdown';
import SideDropDown from './Components/SideDropdown';

//import nameinput/instructionsform/foodimages
import NameInput from './Components/NameInput.js';
import InstructionForm from './Components/InstructionForm.js';
import FoodImages from './Components/FoodImages.js';

function App() {
  //all states
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('valued customer');
  const [extraInstructions, setExtraInstructions] = useState([]);

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
        <NameInput setOrderName={setOrderName}/>
        Choose 1 entree:
        <FoodDropDown setFoodId={setFoodId}/>
        Choose 1 side:
        <SideDropDown setSideId={setSideId}/>
        Choose 1 beverage:
        <DrinkDropDown setDrinkId={setDrinkId}/>
        {/* Instructions Form */}
        <InstructionForm 
          extraInstructions={extraInstructions}
          setExtraInstructions={setExtraInstructions}/>
      </div>
      <div className="order-summary">
        <h3>hey {orderName}, here is your combo meal so far: </h3>
        {/* Food Images (order images) */}
        <FoodImages
          foodId={foodId}
          sideId={sideId}
          drinkId={drinkId}/>
        <ul className='instructions-list'>
          <h3>additional notes:</h3>
          {
            extraInstructions.map((instruction, i) => <li key={`${instruction}-${i}`}>
              {instruction}
            </li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
