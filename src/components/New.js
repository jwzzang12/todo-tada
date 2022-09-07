import { useState } from "react";

export default function New({ newItem }) {
  const [dataItem, setDataItem] = useState({});
  const insertDataItem = function () {
    if (dataItem.contents.length < 1) {
      alert("at least one word is required");
      return false;
    }
    newItem(dataItem.contents);
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
      <button className="btn" onClick={insertDataItem}>
        <span className="material-icons">add</span>
      </button>
    </div>
  );
}
