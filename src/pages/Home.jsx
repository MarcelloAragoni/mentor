import Button from "../components/button/Button";

import "./Home.scss";

export default function Home() {
  return (
    <>
      <div>
        <h1>SEDANS</h1>
        <p>
          Choose a sedan for its affodability and excellent fuel economy. Ideal
          for cruising in the city or your next road trip.
        </p>
        <Button type="primary" text="Learn More" />
      </div>
    </>
  );
}
