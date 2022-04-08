import Card from "../Card/Card";
import automobile from "../../data/data.json";

import "./Cards.scss";

export default function Cards() {
  return (
    <div className="cards__panel">
      {automobile.map((props) => {
        return (
          <Card
            imageType={props.type}
            title={props.title}
            text={props.text}
            buttonColor={props.buttonColor}
          />
        );
      })}
    </div>
  );
}
