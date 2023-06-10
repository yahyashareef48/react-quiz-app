import he from "he"; // Import the "he" library for HTML entity decoding
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuidv4 function for generating unique keys

export default function Quiz({ props, handleAns, num, submitted, options }) {
  const [clicked, setClicked] = useState([false, false, false, false]);

  // Generate buttons for each option
  const btn = options.map((ans, index) => {
    const handleClick = (e) => {
      e.preventDefault();
      if (!submitted) {
        handleAns(num, ans);
        setClicked((oldState) => oldState.map((x, y) => (x = y === index)));
      }
    };

    return (
      <button
        key={uuidv4()}
        onClick={handleClick}
        className={`
        ${clicked[index] ? "text-white bg-gray-600" : "text-gray-600"}
        ${props.correct_answer === ans && submitted && "bg-green-500 border-green-500 text-white"}
        w-auto rounded-full p-4 font-bold border-solid border-2 border-gray-600 m-4
        `}
      >
        {he.decode(ans)}
      </button>
    );
  });

  return (
    <div className="bg-white max-w-md w-full rounded-xl m-auto">
      {/* Render the question */}
      <h3 className=" bg-slate-600 rounded-t-xl p-3 text-white">{he.decode(props.question)}</h3>

      {/* Render the answer options */}
      <div className="grid">{btn}</div>
    </div>
  );
}
