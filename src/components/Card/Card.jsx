import Button from "../button/Button";
import cn from "classnames";

import "./Card.scss";

export default function Card({ buttonColor, imageType, title, text }) {
  const imgClass = cn(
    "card__img",
    { "card__img--sedan": imageType === "sedan" },
    { "card__img--suvs": imageType === "suvs" },
    { "card__img--luxury": imageType === "luxury" }
  );
  const cardClass = cn(
    "card",
    { "card--sedan": title === "SEDANS" },
    { "card--suvs": title === "SUVS" },
    { "card--luxury": title === "LUXURY" }
  );

  return (
    <div className={cardClass}>
      <p className={imgClass}></p>
      <h1>{title}</h1>
      <p>{text}</p>
      <Button color={buttonColor} text="Learn More" />
    </div>
  );
}
