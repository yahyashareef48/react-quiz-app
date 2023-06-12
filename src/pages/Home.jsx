import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-blue-700 via-purple-700 to-orange-700 min-h-screen grid place-items-center p-4">
      <div className="w-full max-w-xs grid gap-4">
        <article className=" mb-16">
          <h1 className="font-bold text-3xl">React Quiz Game</h1>
          <p className="text-xl mt-4">Put your knowledge to the test in this quiz game!</p>
        </article>
        <Link to="/start" className="">
          <button className="p-4 transition-all bg-white/40 hover:bg-white/60 rounded-xl font-bold w-full">
            Test Your Knowledge
          </button>
        </Link>
        <Link to="/score">
          <button className="p-4 transition-all bg-white/40 hover:bg-white/60 rounded-xl font-bold w-full">
            See your old game's scores
          </button>
        </Link>
      </div>
    </main>
  );
}
