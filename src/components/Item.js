import { useState } from "react";

export default function Item({ data }) {
  const [isDone, setIsDone] = useState(data.isDone);
  const toggleDone = () => {
    setIsDone(!isDone);
    console.log(data);
  };

  return (
    <li className={isDone ? "done list" : "list"}>
      <input type="checkbox" name="done" id="done" onClick={toggleDone} />
      <div>{data.contents}</div>
    </li>
  );
}
