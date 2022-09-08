import "./styles/App.css";
import { useState } from "react";
import FormPlayers from "./components/FormPlayers";
import PointsList from "./components/PointsList";
import CalculateFinalScore from "./components/CalculateFinalScore";

function App() {
  const [player1Name, setPlayer1Name] = useState("Player1");
  const [player2Name, setPlayer2Name] = useState("Player2");
  const [player1Level, setPlayer1Level] = useState(5);
  const [player2Level, setPlayer2Level] = useState(5);

  const handleChangeNamePlayer1 = (e) => {
    setPlayer1Name(e.target.value);
  };
  const handleChangeNamePlayer2 = (e) => {
    setPlayer2Name(e.target.value);
  };

  const handleChangeLevelPlayer1 = (e) => {
    if (1 <= e.target.value && e.target.value <= 10) {
      setPlayer1Level(parseInt(e.target.value, 10));
    }
  };
  const handleChangeLevelPlayer2 = (e) => {
    if (1 <= e.target.value && e.target.value <= 10) {
      setPlayer2Level(parseInt(e.target.value, 10));
    }
  };

  // const [displayPointsList, setDisplayPointsList] = useState(false);
  let pointsList = [];
  let pourcentageExpectedWinPlayer1 =
    player1Level / (player1Level + player2Level);
  const generatePointsList = () => {
    // setDisplayPointsList(false);
    for (let i = 0; i < 150; i++) {
      pointsList[i] =
        Math.random() < pourcentageExpectedWinPlayer1
          ? player1Name
          : player2Name;
    }
    console.log(pointsList[2]);
    console.log(typeof pointsList[2]);
    console.log(pointsList);
  };

  return (
    <div className="App">
      <header className="App-header">Tennis Game</header>
      <FormPlayers
        player1Name={player1Name}
        player2Name={player2Name}
        player1Level={player1Level}
        player2Level={player2Level}
        handleChangeNamePlayer1={handleChangeNamePlayer1}
        handleChangeNamePlayer2={handleChangeNamePlayer2}
        handleChangeLevelPlayer1={handleChangeLevelPlayer1}
        handleChangeLevelPlayer2={handleChangeLevelPlayer2}
      />
      <button onClick={generatePointsList}>
        Generate a new 150 points list de App
      </button>
      <PointsList
        pointsList={pointsList}
        generatePointsList={generatePointsList}
        player1Name={player1Name}
        player2Name={player2Name}
        player1Level={player1Level}
        player2Level={player2Level}
      />
      {/* {console.table([
        player1Name,
        // player1Level,
        player2Name,
        // player2Level,
        pourcentageExpectedWinPlayer1,
      ])} */}
      {/* {console.log(player1Name)} */}
      <CalculateFinalScore pointsList={pointsList} />
      <p>PointsList 2 : {pointsList[2]}</p>
    </div>
  );
}

export default App;
