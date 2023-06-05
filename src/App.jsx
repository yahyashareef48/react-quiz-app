import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";
import SuperHard from "./pages/SuperHard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/easy" element={<Easy />} />
      <Route path="/medium" element={<Medium />} />
      <Route path="/hard" element={<Hard />} />
      <Route path="/super-hard" element={<SuperHard />} />
    </Routes>
  );
}

export default App;
