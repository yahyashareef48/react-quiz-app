import he from "he";
import { v4 as uuidv4 } from "uuid";

export default function Quiz({ props, handleAns, num }) {
  let options = [props.correct_answer, ...props.incorrect_answers];
  console.log(options);
  options =
    props.type === "multiple" ? options.sort(() => Math.random() - 0.5) : options.sort().reverse();

  let btn = options.map((ans) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleAns(num, ans);
      }}
      key={uuidv4()}
    >
      {he.decode(ans)}
    </button>
  ));

  return (
    <div>
      <h3>{he.decode(props.question)}</h3>
      <div className="grid gap-4">{btn}</div>
    </div>
  );
}
