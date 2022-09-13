import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../store/storeItem";

export default function Item({ data }) {
  const [isDone, setIsDone] = useState(data.isDone);
  const toggleDone = () => {
    setIsDone(!isDone);
    console.log(data);
  };
  const dispatch = useDispatch();

  return (
    <li className={isDone ? "done list" : "list"}>
      <input type="checkbox" name="done" id="done" onClick={toggleDone} />
      <div
        onDoubleClick={() => {
          dispatch(deleteData(data.id));
        }}
      >
        {data.contents}
      </div>
    </li>
  );
}
