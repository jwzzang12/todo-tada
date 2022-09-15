import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData, modifyData } from "../store/storeItem";

export default function Item({ data }) {
  console.log(data);
  const [isDone, setIsDone] = useState(data.isDone);
  const [isEdit, setIsEdit] = useState(false);
  const [localContents, setLocalContents] = useState(data.contents);

  const contentsRef = useRef();
  const dispatch = useDispatch();

  const clickOutside = (e) => {
    if (isEdit && !contentsRef.current.contains(e.target)) setIsEdit(false);
  };
  const toggleDone = () => {
    setIsDone(!isDone);
  };
  useEffect(() => {
    window.addEventListener("click", clickOutside);
    dispatch(modifyData(data.id, localContents));
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [isEdit]);

  return (
    <li className={isDone ? "done list" : "list"}>
      <input type="checkbox" className="check" id={data.id} onClick={toggleDone} />
      <label for={data.id}></label>
      <div
        ref={contentsRef}
        onClick={() => {
          setIsEdit(true);
          setLocalContents(data.contents);
        }}
      >
        {isEdit ? (
          <textarea
            value={localContents}
            onChange={(e) => {
              setLocalContents(e.target.value);
            }}
          ></textarea>
        ) : (
          data.contents
        )}
      </div>
      <div
        className="btnDel"
        onClick={() => {
          dispatch(deleteData(data.id));
        }}
      >
        <span className="material-icons">close</span>
      </div>
    </li>
  );
}
