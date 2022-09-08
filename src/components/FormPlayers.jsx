import React, { useState } from "react";
import "../styles/FormPlayers.css";

export default function FormPlayers({
  player1Name,
  player2Name,
  player1Level,
  player2Level,
  handleChangeNamePlayer1,
  handleChangeNamePlayer2,
  handleChangeLevelPlayer1,
  handleChangeLevelPlayer2,
}) {
  const [changeSettings, setChangeSettings] = useState(true);
  const appearPlayersSettings = (event) => {
    event.preventDefault();
    setChangeSettings(!changeSettings);
  };

  return (
    <div className="formPlayersContainer">
      <form
        onSubmit={appearPlayersSettings}
        className={
          changeSettings ? "formPlayersSettingsOn" : "formPlayersSettingsOff"
        }
      >
        <div>
          <p> Player 1 : </p>
          <label htmlFor="Player1Name">Name :</label>
          <input
            id="Player1Name"
            name="Player1Name"
            type="text"
            placeholder="Name of Player 1"
            value={player1Name}
            onChange={handleChangeNamePlayer1}
            required
          />
          <label htmlFor="Player1Level">Level :</label>
          <input
            id="Player1Level"
            name="Player1Level"
            type="number"
            placeholder="Enter level of player from 1 to 10"
            value={player1Level}
            onChange={handleChangeLevelPlayer1}
          />
        </div>
        <div>
          <p> Player 2 : </p>
          <label htmlFor="Player2Name">Name :</label>
          <input
            id="Player2Name"
            name="Player2Name"
            type="text"
            placeholder="Name of Player 2"
            value={player2Name}
            onChange={handleChangeNamePlayer2}
            required
          />
          <label htmlFor="Player2Level">Level :</label>
          <input
            id="Player2Level"
            name="Player2Level"
            type="number"
            placeholder="Enter level of player from 1 to 10"
            value={player2Level}
            onChange={handleChangeLevelPlayer2}
          />
        </div>
        <button>Hide Players settings</button>
      </form>
      <button
        onClick={appearPlayersSettings}
        className={
          changeSettings ? "formPlayersSettingsOff" : "formPlayersSettingsOn"
        }
      >
        Change Players settings
      </button>
    </div>
  );
}
