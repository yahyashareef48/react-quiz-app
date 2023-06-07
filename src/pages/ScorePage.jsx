import Score from "../components/Score";
import { v4 as uuidv4 } from "uuid";

export default function ScorePage() {
  const localStorageArr = JSON.parse(localStorage.getItem("score"));

  const scoreElement = localStorageArr.map((data) => <Score key={uuidv4()} props={data} />);

  return <main>{scoreElement}</main>;
}
