import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [formData, setFormData] = useState({
    difficulty: "medium",
    category: "any",
    type: "multiple",
  });

  const handleChange = (e) => {
    setFormData((oldFormData) => ({ ...oldFormData, [e.target.name]: e.target.value }));
  };
  console.log(formData);

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <main className="min-h-screen  grid place-items-center">
      <form onSubmit={handleSubmit} action="/" className="grid grid-rows-1 max-w-xs gap-4">
        <div>
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full"
          >
            <option value="any">Random</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </select>
        </div>

        <div>
          <label htmlFor="type">Type</label>
          <select name="type" value={formData.type} onChange={handleChange} className="w-full">
            <option value="any">Random</option>
            <option value="multiple">Multiple Chois</option>
            <option value="boolean">True or False</option>
          </select>
        </div>

        <button
          onClick={(e) => e.preventDefault()}
          className="p-4 bg-[#00000089] rounded-xl font-bold"
        >
          Test Your Knowledge
        </button>
      </form>
    </main>
  );
}

//
