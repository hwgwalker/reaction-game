import React, { useEffect, useState, useContext } from "react";
import { TimerContext } from "@context/TimerContext";

import styles from "@styles/Button.module.scss";

const Button = ({ label = "button" }) => {
  const { buttonActive, gameStart, startTimer, recordTime, gameOver } = useContext(TimerContext);

  const handleClick = () => {
    if (buttonActive) {
      recordTime(); // Stop the timer and record the time
    } else if (gameStart) {
      gameOver(); // Show "Game Over" message if the game has started but the button is not active
    }
  };

  return (
    <button className={`${styles.button} buttonReset fc--white ${buttonActive ? styles["button--active"] : ""}`} onMouseDown={handleClick}>
      <span class={styles.button__shadow}></span>
      <span class={styles.button__edge}></span>
      <span class={styles.button__front}>{label}</span>
    </button>
  );
};

export default Button;
