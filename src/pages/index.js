import React, { useContext } from "react";
import { TimerContext } from "@context/TimerContext";

import Button from "../../components/Button";
import Timer from "../../components/Timer";
import UserTimes from "@components/UserTimes";
import GameOver from "@components/GameOver";
import BaseBtn from "@components/BaseBtn";

export default function Home() {
  const { time, buttonActive, startTimer, setGameStart, gameStart, times, isGameOver, startGame, isPreGame } = useContext(TimerContext);

  return (
    <div className="container container--large flex flex--dirC alignI--center justifyC--center">
      <div className="pos--abs xy--center flex flex--dirC alignI--center justifyC--center" style={{ width: "100%" }}>
        {gameStart ? (
          <>
            <Timer />
            <Button />
            <div className="pos--abs" style={{ bottom: "0", transform: "translateY(100%)" }}>
              <UserTimes />
            </div>
          </>
        ) : !isGameOver && isPreGame ? (
          <div className="flex flex--dirC alignI--center justifyC--center">
            <h1 className="ff--bang title" style={{ fontSize: "70px", marginBottom: "10px" }}>
              Reaction Game
            </h1>
            <p className="ta--center mb--80 lh--160 o--8" style={{ maxWidth: "400px" }}>
              Click the button as soon as it turns green. If you press the button before it turns green it&apos;s game over!
            </p>
              <BaseBtn onClick={startGame}>Start Game</BaseBtn>
              <p className="ta--center mt--20 lh--160 o--8 fs--14">You have 5 tries to get the fastest time possible!</p>
          </div>
        ) : (
          <GameOver />
        )}
      </div>
    </div>
  );
}
