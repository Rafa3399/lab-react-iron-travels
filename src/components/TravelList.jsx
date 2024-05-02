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
              <div id="price">
                <h4>Price:</h4><p>{el.totalCost}€</p>
              </div>
              <div id="labels">
                <p className={el.totalCost >= 1500 ? "premium" : ""}>
                  {el.totalCost >= 1500 ? "Premium" : null}
                </p>
                <p className={el.totalCost <= 350 ? "deal" : ""}>
                  {el.totalCost <= 350 ? "Great Deal" : null}
                </p>
                <p className={el.parts[0].name === "All-Inclusive Package" ? "all-inclusive" : ""}>
                  {el.parts[0].name === "All-Inclusive Package" ? "All-inclusive" : null}
                </p>
              </div>
            </section>
          </div>
        )
       })}
    </div>
  )
}

export default TravelList;