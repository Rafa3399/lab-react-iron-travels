import travelPlansData from "../assets/travel-plans.json";
import { useState } from 'react'
import "./TravelList.css"

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  return(
    <div className="TravelList">
      {travelPlans.map((el) => {
        return (
          <div className="Card" key={el.id}>
            <img id="cardImg" src={el.image} />
            <section id="cardSection">
            <h2>{el.destination} ({el.days} days)</h2>
            <p>{el.description}</p>
            <p>Price: {el.totalCost}</p>
            </section>
          </div>
        )
       })}
    </div>
  )
}

export default TravelList;