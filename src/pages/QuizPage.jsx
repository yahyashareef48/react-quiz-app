import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  const { state } = useLocation();
  const navigate = useNavigate()

  const [quizData, setQuizData] = useState([]);
  const [ans, setAns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [submitState, setSubmitState] = useState({
    score: 0,
    submitted: false,
  });

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
    <Quiz
      key={uuidv4()}
      props={data}
      submitted={submitState.submitted}
      num={index}
      handleAns={handleAns}
    />
  ));

  return (
    <>
      {submitState.submitted && <div>{submitState.score}</div>}
      {/* Render the Quiz components */}
      <div className="grid gap-4">{quizData.length !== 0 && quizElements}</div>

      {/* Submit button */}
      {!submitState.submitted ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            // Calculate game score
            let gameScore = 0;
            ans.map((a, i) => {
              quizData[i].correct_answer === a && gameScore++;
            });
            setSubmitState({
              score: gameScore,
              submitted: true,
            });
            window.scrollTo(0, 0);
          }}
        >
          Submit
        </button>
      ) : (
        <button onClick={() => navigate("/", { replace: true })}>
          play again
        </button>
      )}
    </>
  );
}
