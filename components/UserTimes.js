import React, { useContext } from "react";
import { TimerContext } from "@context/TimerContext";

import styles from "@styles/UserTimes.module.scss";

const UserTimes = () => {
  const { times } = useContext(TimerContext);

  const lowestTimeIndex = times.indexOf(Math.min(...times));

  return (
    <div className={styles.userTimes}>
      {times.map((time, i) => (
        <div key={i} className={`flex ${styles.userTimes__timeHolder}`}>
          <span className={`${styles.userTimes__label}`}>{i + 1}</span>
          <div className={`${styles.userTimes__time} ${lowestTimeIndex === i ? styles["userTimes__time--lowest"] : ""}`}>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
          {lowestTimeIndex === i && <span className={styles.userTimes__bestTime}> &larr; Best Time!</span>}
        </div>
      ))}
    </div>
  );
};

export default UserTimes;
