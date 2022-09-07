import "./App.css";
import { useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import New from "./components/New";

function App() {
  const dataId = useRef(0);
  const newItem = function (contents) {
    const newData = { contents: contents, isDone: false, id: dataId.current };
    dataId.current += 1;
    setData([newData, ...data]);
    console.log(newData);
  };
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header />
      <New newItem={newItem} />
      <Footer />
    </div>
  );
}

export default App;
