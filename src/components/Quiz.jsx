import he from "he"; // Import the "he" library for HTML entity decoding
import { v4 as uuidv4 } from "uuid"; // Import the uuidv4 function for generating unique keys

export default function Quiz({ props, handleAns, num, submitted }) {
  let options = [props.correct_answer, ...props.incorrect_answers];

  // Sort options based on the question type
  options =
    props.type === "multiple" ? options.sort(() => Math.random() - 0.5) : options.sort().reverse();

  // Generate buttons for each option
  let btn = options.map((ans) => {
    let handleClick = (e) => {
      e.preventDefault();
      !submitted && handleAns(num, ans);
    };

    return (
      <button onClick={handleClick} key={uuidv4()}>
        {he.decode(ans)}
      </button>
    );
  });

  return (
    <div>
      {/* Render the question */}
      <h3>{he.decode(props.question)}</h3>

      {/* Render the answer options */}
      <div className="grid gap-4">{btn}</div>
    </div>
  );
}
