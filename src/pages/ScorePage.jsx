import { v4 as uuidv4 } from "uuid";

export default function ScorePage() {
  const localStorageArr = JSON.parse(localStorage.getItem("score"));

  const scoreElement = localStorageArr.map((data) => (
    <div key={uuidv4()}>
      <p>Score: {data.score}</p>
      <p>Time & Date: {data.time}</p>
      <p>difficulty: {data.difficulty}</p>
    </div>
  ));

  return <main>{scoreElement}</main>;
}
