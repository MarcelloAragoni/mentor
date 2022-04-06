import Card from "../Card/Card";

import "./Cards.scss";

export default function Cards() {
  return (
    <div className="cards__panel">
      <Card
        imageType="sedan"
        title="SEDANS"
        text="Choose a sedan for its affodability and excellent fuel economy. Ideal for cruising in the city or your next road trip."
        buttonColor="orange"
      />
      <Card
        imageType="suvs"
        title="SUVS"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        buttonColor="green"
      />
      <Card
        imageType="luxury"
        title="LUXURY"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style"
        buttonColor="blue"
      />
    </div>
  );
}
