import { Link } from "react-router-dom"

export default function Home() {
  return (
    <nav className="grid gap-4">
      <Link to="/easy">Easy</Link>
      <Link to="/medium">Medium</Link>
      <Link to="/hard">Hard</Link>
      <Link to="/super-hard">Super Hard</Link>
    </nav>
  );
}