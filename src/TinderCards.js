import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "mark zuckerberg",
      url:
        "https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2",
    },
    {
      name: "jethalal gada",
      url:
        "https://i.pinimg.com/originals/e3/a5/d3/e3a5d394645639bba1a10ad92a0e0bbb.jpg",
    },
  ]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    // this is where the code runs...
    const unsubscribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // this is the cleanup...
      unsubscribe();
    };
  }, [people]);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
