export default function SideDropDown({ setSideId }) {

  function handleChange(e) {
    setSideId(e.target.value);
  }
    
  return <select onChange={handleChange}>
    <option value="1">Soup Dumplings</option>
    <option value="2">Spring Rolls</option>
    <option value="3">Durian Custard</option>
  </select>;
}