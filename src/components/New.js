import { useState } from "react";
import { insertData } from "../store/storeItem";
import { useDispatch, useSelector } from "react-redux";

export default function New() {
  const [dataItem, setDataItem] = useState({});
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const insertDataItem = function () {
    console.log("btn click");
    if (dataItem.contents.length < 1) {
      alert("at least one word is required");
      return false;
    }
    dispatch(insertData({ id: count + 1, ...dataItem }));
    setDataItem({
      contents: "",
    });
  };
  const changeDataItem = function (e) {
    setDataItem({ ...dataItem, [e.target.name]: e.target.value });
  };
  return (
    <div className="newData section">
      <input
        type="text"
        name="contents"
        value={dataItem.contents}
        placeholder="what to do"
        onChange={changeDataItem}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            insertDataItem();
          }
        }}
      />
      <button className="btnAdd" onClick={insertDataItem}>
        <span className="material-icons">add</span>
      </button>
    </div>
  );
}
