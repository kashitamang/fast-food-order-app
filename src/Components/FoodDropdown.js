export default function FoodDropDown({ setFoodId }) {

  function handleChange(e) {
    setFoodId(e.target.value);
  }

  return <select onChange={handleChange}>
    <option value="1">Phở Nạm: Vietnamese beef noodle soup</option>
    <option value="2">Mie Goreng: Indonesian stir fried noodles</option>
    <option value="3">Yum Woon Sen: Thai glass noodle salad</option>
  </select>;
}