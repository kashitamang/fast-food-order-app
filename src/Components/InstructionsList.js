export default function InstructionsList({ extraInstructions }) {
    
  return <div className='instructions-list'>
    <ul className='instructions-list'>
      <h3>additional notes:</h3>
      {
        extraInstructions.map((instruction, i) => <li key={`${instruction}-${i}`}>
          {instruction}
        </li>)
      }
    </ul>
  </div>;
}