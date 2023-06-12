import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";
import ScorePage from "./pages/ScorePage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/score" element={<ScorePage />} />
    </Routes>
  );
}

export default App;
