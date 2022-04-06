import "./Button.scss";

export default function Button({text, type = "primary"}) {
  return <button className={`button button--${type}`}>{text}</button>;
}
