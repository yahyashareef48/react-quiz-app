export default function Score({ props }) {
  return (
    <div>
      <p>Score: {props.score}</p>
      <p>Time & Date: {props.time}</p>
      <p>difficulty: {props.difficulty}</p>
    </div>
  );
}
