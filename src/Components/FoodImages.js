
export default function FoodImages({ foodId, drinkId, sideId }) {
  return <div className='image-display'>
    <img className="food-image" src={`food-${foodId}.jpg`}/>
    <img className="side-image" src={`side-${sideId}.jpg`}/>
    <img className="drink-image" src={`drink-${drinkId}.jpg`}/>
  </div>;
}