import { useEffect, useState } from "react";
import Card from "../Card/Card";

import "./Cards.scss";

export default function Cards() {
  const [automobiles, setAutomobiles] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAutomobiles(data.automobiles);
      });
  }, []);

  return (
    <div className="cards__panel">
      {automobiles.map((automobile) => (
        <Card
          key={automobile.id}
          imageType={automobile.type}
          title={automobile.title}
          text={automobile.text}
          buttonColor={automobile.buttonColor}
        />
      ))}
    </div>
  );
}
