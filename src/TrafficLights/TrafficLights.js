import { useState } from "react";
import styles from "./style.module.css";

export default function TrafficLights() {
  const [number, setNumber] = useState(1);
  const changeLight = () => {
    if (number == 3) {
      setNumber(1);
      return;
    }

    setNumber(number + 1);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={changeLight}>
        Next
      </button>
      <div className={styles.lightContainer}>
        <div
          className={styles.lights}
          style={{ backgroundColor: number == 1 ? "red" : "" }}
        />
        <div
          className={styles.lights}
          style={{ backgroundColor: number == 2 ? "green" : "" }}
        />
        <div
          className={styles.lights}
          style={{ backgroundColor: number == 3 ? "yellow" : "" }}
        />
      </div>
    </div>
  );
}
