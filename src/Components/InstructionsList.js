import Instruction from './Instruction.js';

export default function InstructionsList({ extraInstructions }) {
    
  return <div className='instructions-list'>
    <ul className='instructions-list'>
      <h3>additional notes:</h3>
      {
        extraInstructions.map((instruction, i) => <Instruction key={`${instruction}-${i}`}
          instruction={instruction}
        />)
      }
    </ul>
  </div>;
}