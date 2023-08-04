import React, { createContext, useState, useEffect } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [times, setTimes] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);
  const [isPreGame, setIsPreGame] = useState(true);
  const [gameStart, setGameStart] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // New state to hold the interval ID
  const [timeoutId, setTimeoutId] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const startGame = () => {
    setGameStart(true);
    resetScores();
    setIsPreGame(false);
  };

  const toggleButton = () => {
    const randomDuration = Math.floor(Math.random() * 3) + 1;
    if (gameStart) {
      const id = setTimeout(() => {
        setButtonActive(true);
      }, randomDuration * 1000);
      setTimeoutId(id);
    }
  };

  useEffect(() => {
    toggleButton();
  }, [gameStart]);

  useEffect(() => {
    if (buttonActive) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [buttonActive]);

  const stopTimer = () => {
    clearInterval(intervalId); // Clear the interval using the saved interval ID
    setIntervalId(null); // Reset the interval ID state
    setTime(0);
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
    setIntervalId(id); // Save the interval ID to the state
  };

  const recordTime = () => {
    if (buttonActive) {
      setButtonActive(false);
      setTimes((prevTimes) => [...prevTimes, time]);
      setTime(0);

      if (times.length < 4) {
        toggleButton();
      }

      if (times.length === 4) {
        stopTimer();
        setGameStart(false);
        gameOver();
      }
    }
  };

  const gameOver = () => {
    stopTimer();
    setButtonActive(false);
    clearTimeout(timeoutId);
    setIsGameOver(true);
    setGameStart(false);
  };

  const resetScores = () => {
    setTimes([]);
  };

  return (
    <TimerContext.Provider
      value={{
        time,
        buttonActive,
        gameStart,
        recordTime,
        setGameStart,
        startTimer,
        toggleButton,
        times,
        gameOver,
        isGameOver,
        setIsGameOver,
        startGame,
        isPreGame,
        setIsPreGame,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
