import "./App.css";
import Display from "./components/Display";
import WASTE_MAP from "./wasteMap.json";

function App() {
  return <Display initialValue={WASTE_MAP} />;
}

export default App;
