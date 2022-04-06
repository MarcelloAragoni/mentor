import "./Button.scss";
import cn from "classnames";

export default function Button({ text, color }) {
  const buttonColor = cn(
    "button",
    { "button--orange": color === "orange" },
    { "button--green": color === "green" },
    { "button--blue": color === "blue" }
  );

  return (
    <button type="button" className={buttonColor}>
      {text}
    </button>
  );
}
