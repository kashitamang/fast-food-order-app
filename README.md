# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Fast Food Ordering Tool
User should be able to . . .	
Visit the deployed app on Netlify, with link in the About section of the Github repo	required for grading
Events	
✅ On typing in the name input, the order name changes with each keystroke	1
✅ On changing the food dropdown, the image for the food changes appropriately	1
✅ On changing the side dropdown, the image for the side changes appropriately	1
✅ On changing the drink dropdown, the image for the drink changes appropriately	1
✅ On submitting a new extra instruction, it is displayed with all the other extra instructions in a list	2


Components	
✅ App() : tracks state for foodId, sideId, drinkId, instructions, formInstruction, and orderName	2

✅ App() : passes state as props correctly to OrderNameInput and OrderImages, InstructionsForm, InstructionsList. Also displays the order's name.	2

✅ OrderNameInput({ setOrderName }) : on change, call setOrderName with the new e.target.value to change App.js state	1

✅ OrderImages({ foodId, sideId, drinkId }) : use the 3 props to render the correct images that live in the public directory	2

✅ InstructionsForm({ handleSubmit, setFormInstruction }) : On change of the input, set the formInstruction.	1

✅ InstructionsForm({ handleSubmit, setFormInstruction }) : On submit of the form, this instruction is injected into App.js state using a callback state handler passed down as a prop.	2

✅ InstructionsList({ instructions }) : maps through the instructions prop and renders an Instruction for each item in the array	2

✅ FoodDropdown({ setFoodId }), ✅ SideItemDropdown({ setSideId }), ✅ DrinkDropdown({ setDrinkId }) : each of these components should take in a state handler and change App.js state on change	1

✅ Instruction({ instruction } ) : renders the instruction prop however you like	1

Stretch goal ideas:
Write two components: OrderForm (to hold all the input components) and OrderDisplay (to show the user what is selected). Import the appropriate components into these components so that App.js is only responsible for:
initializing state
calling OrderForm and OrderDisplay and
passing the correct props to OrderForm and OrderDisplay.
Write a component called Dropdown. Use this component to replace all 3 of your dropdowns. Ask yourself: what differs between these 3 dropdowns? The answer to that question will tell you what props your abstracted Dropdown component will need to be passed. This is a challenge :)
Add a Submit Order button. The app will clear the current order and keep track of all past orders and render them to the page (like soccer scorekeeper).
Try moving all your App.js state and state