import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  const { state } = useLocation();
  const [quizData, setQuizData] = useState([]);
  const [ans, setAns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  // Function to handle user answers
  const handleAns = (index, value) => {
    setAns((oldAns) => {
      oldAns[index] = value;
      return oldAns;
    });
  };

  // URL for API request
  const url = `https://opentdb.com/api.php?amount=10&${
    state.formData.category !== "any" ? "category=&" : ""
  }difficulty=${state.formData.difficulty}&type=${state.formData.type}`;

  useEffect(() => {
    // Fetch quiz data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  // Generate Quiz components using quizData
  const quizElements = quizData.map((data, index) => (
    <Quiz key={uuidv4()} props={data} num={index} handleAns={handleAns} />
  ));

  return (
    <>
      {/* Render the Quiz components */}
      <div className="grid gap-4">{quizData.length !== 0 && quizElements}</div>

      {/* Submit button */}
      <button
        onClick={(e) => {
          e.preventDefault();

          // Calculate game score
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
