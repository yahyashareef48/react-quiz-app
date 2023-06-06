import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Score from "./pages/Score";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />}>
        <Route path="score" element={<Score />} />
      </Route>
    </Routes>
  );
}

export default App;
