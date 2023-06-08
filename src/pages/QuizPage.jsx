import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  // Get the current location state and navigate function from react-router-dom
  const { state } = useLocation();
  const navigate = useNavigate();

  // Define the state variables
  const [quizData, setQuizData] = useState([]); // Holds the quiz data fetched from the API
  const [ans, setAns] = useState([null, null, null, null, null, null, null, null, null, null]); // Holds the user's answers
  const [submitState, setSubmitState] = useState({
    score: 0,
    submitted: false,
  }); // Holds the score and submission state
  const [quizElements, setQuizElements] = useState([]);

  // Construct the URL for API request based on the form data
  const url = `https://opentdb.com/api.php?amount=10&${
    state.formData.category !== "any" ? "category=&" : ""
  }difficulty=${state.formData.difficulty}${
    state.formData.type !== "any" ? "&type=" + state.formData.type : ""
  }`;

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

    if(ans.includes(null)) {
      alert("Please ensure that you answer all the questions.");
      return
    }

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

    // localStorage
    let localStorageArr = JSON.parse(localStorage.getItem("score"));
    localStorageArr.push({
      score: gameScore,
      time: new Date(),
      difficulty: state.formData.difficulty,
    });
    localStorageArr = JSON.stringify(localStorageArr);
    localStorage.setItem("score", localStorageArr);
  };

  // Generate Quiz components using quizData
  useEffect(() => {
    const mappedQuizElements = quizData.map((data, index) => {
      let options = [data.correct_answer, ...data.incorrect_answers];

      if (data.type === "multiple") {
        options.sort(() => Math.random() - 0.5);
      } else {
        options.sort().reverse();
      }

      return (
        <Quiz
          key={uuidv4()}
          props={data}
          options={options}
          submitted={submitState.submitted}
          num={index}
          handleAns={handleAns}
        />
      );
    });

    setQuizElements(mappedQuizElements);
    
  }, [quizData, submitState]);

  return (
    <div className="bg-gradient-to-tr from-blue-700 via-purple-700 to-orange-700 min-h-screen">
      {/* Display the score if submitted */}
      {submitState.submitted && <div>{submitState.score}</div>}

      {/* Render the Quiz components */}
      <div className="grid gap-8 py-8">{quizData.length !== 0 && quizElements}</div>

      {/* Submit button */}
      {!submitState.submitted ? (
        <button onClick={handleSubmitBtn}>Submit</button>
      ) : (
        <button onClick={() => navigate("/", { replace: true })}>Play Again</button>
      )}
    </div>
  );
}
