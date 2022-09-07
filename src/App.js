import "./App.css";
import "./css/layout.css";
import { useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import New from "./components/New";
import List from "./components/List";

function App() {
  const dataId = useRef(0);
  // const modify = function (id, localContents) {
  //   console.log(localContents);
  //   const modifiedData = data.map((item, idx) => {
  //     return item.id === id ? { ...item, contents: localContents } : { ...item };
  //   });
  //   setData(modifiedData);
  // };
  const newItem = function (contents) {
    const newData = { contents: contents, isDone: false, id: dataId.current };
    dataId.current += 1;
    setData([...data, newData]);
    // console.log(newData);
  };
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header />
      <New newItem={newItem} />
      <List data={data} />
      <Footer />
    </div>
  );
}

export default App;
