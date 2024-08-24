// import { HookOne } from "./components/useEffect/HookOne";
import HookTwo from "./components/useEffect/HookTwo";
import IntervalCounter from "./components/useEffect/intervalCounter";
import MouseOver from "./components/useEffect/Mous";
function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App" style={style}>
      <MouseOver />
    </div>
  );
}

export default App;
