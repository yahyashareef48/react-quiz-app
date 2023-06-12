import { v4 as uuidv4 } from "uuid";

export default function ScorePage() {
  const localStorageArr = JSON.parse(localStorage.getItem("score")).reverse();

  const scoreElement = localStorageArr.map((data) => (
    <div key={uuidv4()}>
      <p>Score: {data.score}</p>
      <p>Time & Date: {data.time}</p>
      <p>difficulty: {data.difficulty}</p>
      <p>
        type:{" "}
        {data.type === "any"
          ? "Random"
          : data.type === "boolean"
          ? "True or False"
          : "Multiple Chois"}
      </p>
    </div>
  ));

  return <main>{scoreElement}</main>;
}
