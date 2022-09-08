export default function CalculateFinalScore({ pointsList }) {
  return (
    <div>
      <p>Longueur de PointsList : {pointsList.length}</p>
      {pointsList.length > 1 ? (
        <button>Calculate Final Score</button>
      ) : (
        "PointsList vide"
      )}
    </div>
  );
}
