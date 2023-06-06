import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  const { state } = useLocation();
  const [quizData, setQuizData] = useState([]);
  const [ans, setAns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleAns = (index, value) => {
    setAns((oldAns) => {
      console.log(ans);
      oldAns[index] = value;
      return oldAns;
    });
  };

  const url = `https://opentdb.com/api.php?amount=10&${
    state.formData.category !== "any" ? "category=&" : ""
  }difficulty=${state.formData.difficulty}&type=${state.formData.type}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  const quizElements = quizData.map((data, index) => (
    <Quiz key={uuidv4()} props={data} num={index} handleAns={handleAns} />
  ));

  return (
    <>
      <div className="grid gap-4">{quizData.length !== 0 && quizElements}</div>
      <button
        onClick={(e) => {
          e.preventDefault();
          let gameScore = 0;
          ans.map((a, i) => {
            quizData[i].correct_answer === a && gameScore++;
          });
          console.log(gameScore);
        }}
      >
        Submit
      </button>
    </>
  );
}
