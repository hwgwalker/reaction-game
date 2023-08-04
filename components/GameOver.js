import React, { useContext } from "react";
import { TimerContext } from "@context/TimerContext";
import UserTimes from "./UserTimes";

import styles from "@styles/GameOver.module.scss";
import BaseBtn from "./BaseBtn";

const GameOver = () => {
  const { isGameOver, setIsGameOver, setGameStart, times, startGame, setIsPreGame } = useContext(TimerContext);

  const handlePlay = () => {
    setIsGameOver(false);
    startGame();
  };

  const backToStart = () => {
    setIsGameOver(false);
    setIsPreGame(true);
  };

  return (
    <div className={`${styles.gameOver} ta--center`}>
      {times.length < 5 ? (
        <div className={styles.gameOver__titleHolder}>
          <h1 className={`${styles.gameOver__title} ${styles["gameOver__title--error"]} ff--bang title`}>Game over!</h1>
          <p className="fs--14">You pressed the button before it was active.</p>
        </div>
      ) : (
        <div className={styles.gameOver__titleHolder}>
          <h1 className={`${styles.gameOver__title} ${styles["gameOver__title--success"]} ff--bang title`}>Game complete!</h1>
          {/* <p className="fs--14"></p> */}
        </div>
      )}

      {times.length > 0 && (
        <div className={styles.gameOver__times}>
          <p className={styles.gameOver__timesTitle}>Your Times</p>
          <UserTimes />
        </div>
      )}
      <div className={`${styles.gameOver__buttonHolder} flex justifyC--center`}>
        <BaseBtn className={`${styles.gameOver__button} buttonReset`} onClick={handlePlay}>
          Play Again
        </BaseBtn>
        <BaseBtn className={`${styles.gameOver__button} buttonReset`} onClick={backToStart}>
          Back to Home
        </BaseBtn>
      </div>
    </div>
  );
};

export default GameOver;
