import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import QuizPage from "./QuizPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage/>} />
    </Routes>
  );
}

export default App;
