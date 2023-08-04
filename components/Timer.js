import React, { useState, useEffect, useContext } from "react";
import { TimerContext } from "@context/TimerContext";

import styles from "@styles/Timer.module.scss"

const Timer = ({ toggleTimer }) => {
  const { time, buttonActive, startTimer } = useContext(TimerContext);

  return (
    <div className={styles.timer}>
      <div className={styles.timer__timeHolder}>
        <span className={`${styles.timer__time} ${styles['timer__time--min']}`}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className={`${styles.timer__time} ${styles['timer__time--sec']}`}>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span className={`${styles.timer__time} ${styles['timer__time--mil']}`}>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Timer;
