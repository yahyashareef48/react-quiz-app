import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <h3>Quiz Game</h3>
      <Link to="/score">Score Bord</Link>
    </nav>
  );
}
