import { v4 as uuidv4 } from "uuid";

export default function ScorePage() {
  const localStorageArr = JSON.parse(localStorage.getItem("score"));

  const scoreElement =
    localStorageArr &&
    localStorageArr.map((data) => (
      <div
        key={uuidv4()}
        className="p-6 shadow-2xl bg-white/60 max-w-md w-full rounded-xl grid gap-2 items-center"
      >
        <p className="font-bold text-base">
          Score: <span className="font-normal">{data.score}</span>
        </p>
        <p className="font-bold text-base">
          Date: <span className="font-normal">{data.time.split("T")[0].replace(/-/g, "/")}</span>
        </p>
        <p className="font-bold text-base">
          difficulty: <span className="font-normal">{data.difficulty}</span>
        </p>
        <p className="font-bold text-base">
          type:{" "}
          <span className="font-normal">
            {data.type === "any"
              ? "Random"
              : data.type === "boolean"
              ? "True or False"
              : "Multiple Chois"}
          </span>
        </p>
      </div>
    ));

  return (
    <main className="min-h-screen grid gap-8 p-4 place-items-center bg-gradient-to-tr from-blue-700 via-purple-700 to-orange-700">
      {localStorageArr ? scoreElement.reverse() : <h1 className="text-xl font-bold tracking-wide">Scoreboard is empty</h1>}
    </main>
  );
}
