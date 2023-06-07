import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  // Get the current location state and navigate function from react-router-dom
  const { state } = useLocation();
  const navigate = useNavigate();

  // Define the state variables
  const [quizData, setQuizData] = useState([]); // Holds the quiz data fetched from the API
  const [ans, setAns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // Holds the user's answers
  const [submitState, setSubmitState] = useState({
    score: 0,
    submitted: false,
  }); // Holds the score and submission state

  // Construct the URL for API request based on the form data
  const url = `https://opentdb.com/api.php?amount=10&${
    state.formData.category !== "any" ? "category=&" : ""
  }difficulty=${state.formData.difficulty}&type=${state.formData.type}`;

  useEffect(() => {
    // Fetch quiz data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  // Function to handle user answers
  const handleAns = (index, value) => {
    setAns((oldAns) => {
      // Update the user's answer at the specified index
      oldAns[index] = value;
      return oldAns;
    });
  };

  // Submit button function
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    // Calculate the game score based on correct answers
    let gameScore = 0;
    ans.map((a, i) => {
      quizData[i].correct_answer === a && gameScore++;
    });
    // Update the submission state and score
    setSubmitState({
      score: gameScore,
      submitted: true,
    });
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    console.log(gameScore);

    // localStorage
    let localStorageArr = JSON.parse(localStorage.getItem("score"));
    localStorageArr.push({
      score: gameScore,
      time: new Date(),
      difficulty: state.formData.difficulty,
    });
    localStorageArr = JSON.stringify(localStorageArr);
    localStorage.setItem("score", localStorageArr)
  };

  // Generate Quiz components using quizData
  const quizElements = quizData.map((data, index) => (
    <Quiz
      key={uuidv4()} // Assign a unique key to each Quiz component
      props={data}
      submitted={submitState.submitted}
      num={index}
      handleAns={handleAns}
    />
  ));

  return (
    <>
      {/* Display the score if submitted */}
      {submitState.submitted && <div>{submitState.score}</div>}

      {/* Render the Quiz components */}
      <div className="grid gap-4">{quizData.length !== 0 && quizElements}</div>

      {/* Submit button */}
      {!submitState.submitted ? (
        <button onClick={handleSubmitBtn}>Submit</button>
      ) : (
        <button onClick={() => navigate("/", { replace: true })}>Play Again</button>
      )}
    </>
  );
}
