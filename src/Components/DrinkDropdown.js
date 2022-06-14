export default function DrinkDropDown({ setDrinkId }) {

  function handleChange(e) {
    setDrinkId(e.target.value);
  }
  
  return <select onChange={handleChange}>
    <option value="1">Chai: Himalayan milk tea</option>
    <option value="2">Vietnamese Coffee with sweetened condensed milk</option>
    <option value="3">Salted Lime Soda</option>
  </select>;
}