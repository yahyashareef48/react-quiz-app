import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function QuizPage() {
  const { state } = useLocation();
  const [quizData, setQuizData] = useState({});

  const url = `https://opentdb.com/api.php?amount=10&${
    state.formData.category !== "any" ? "category=&" : ""
  }difficulty=${state.formData.difficulty}&type=${state.formData.type}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  return <h1>hello this is QuizPage</h1>;
}
