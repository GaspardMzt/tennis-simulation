import React from "react";
import { useState } from "react";
import "../styles/PointsList.css";

export default function PointsList({
  pointsList,
  generatePointsList,
  player1Name,
  player2Name,
  player1Level,
  player2Level,
}) {
  const [displayPointsList, setDisplayPointsList] = useState(false);

  // let pourcentageExpectedWinPlayer1 =
  //   player1Level / (player1Level + player2Level);

  /*
  const generatePointsList = () => {
    setDisplayPointsList(false);
    for (let i = 0; i < 150; i++) {
      pointsList[i] =
        Math.random() < pourcentageExpectedWinPlayer1
          ? player1Name
          : player2Name;
    }
  };
*/
  return (
    <div>
      <button onClick={generatePointsList}>
        Generate a new 150 points list
      </button>
      <button onClick={() => setDisplayPointsList(!displayPointsList)}>
        {displayPointsList
          ? "Hide the generated list"
          : "Display the generated list"}
      </button>
      <div
        className={
          displayPointsList ? "displayPointsListOn" : "displayPointsListOff"
        }
      >
        <p>
          Pour info : Level P1 : {player1Level}, Level P2 : {player2Level}.
          Chance de gain P1 : {player1Level / (player1Level + player2Level)}
        </p>
        <ul>
          {pointsList.map((winnerPointName, index) => (
            <li key={index}>
              Point {index + 1}: remporté par {winnerPointName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
