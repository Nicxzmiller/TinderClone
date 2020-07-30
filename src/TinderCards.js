import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople ] = useState([
        {
            name:'Steve Jobs',
            url: 'https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs-1440x960.jpg'
        },
        {
            name:'Tom Ford',
            url: 'https://makerfairerome.eu/wp-content/uploads/2020/04/tomford01-1027x560.jpg'
        }
    ]);

    return(
        <div>
            <h1>Tinder Cards</h1>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}>
                        <div style={{backgroundImage:`url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;