import { useState } from 'react';

export default function InstructionForm({ setExtraInstructions, extraInstructions }) {
    //set state
  const [instructionInForm, setInstructionInForm] = useState('');

// this function takes the user submission and submits the data to hold the information for later
  function handleSubmit(e) {
    e.preventDefault();
    //makes copy of old array, adds new item on the end
    setExtraInstructions([...extraInstructions, instructionInForm]);
    //resets form
    setInstructionInForm('');
  }

  function handleInstructionChange(e) {
    setInstructionInForm(e.target.value);
  }

//this is the html we want returned to the viewer
  return <form onSubmit={handleSubmit}>
    <label>
        anything else we should know?
      <input value={instructionInForm} onChange={handleInstructionChange} required/>
    </label>
    <button>submit</button>
  </form>;
}