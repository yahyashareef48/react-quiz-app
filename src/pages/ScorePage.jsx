import Score from "../components/Score";

export default function ScorePage() {
  const localStorageArr = JSON.parse(localStorage.getItem("score"));
  console.log(localStorageArr);

  const scoreElement = localStorageArr.map((data) => <Score props={data} />);

  return <main>{scoreElement}</main>;
}
