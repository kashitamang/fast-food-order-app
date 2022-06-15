//allows user to enter a name which displays

export default function NameInput({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }

  return <div className='name-input'>
    What is a good name for the order?
    <input onChange={handleChange} required/>
  </div>;
}