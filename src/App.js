import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import New from "./components/New";
import List from "./components/List";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.dataList);
  return (
    <div className="App">
      <Header />
      <New />
      <List data={data} />
      <Footer />
    </div>
  );
}

export default App;
