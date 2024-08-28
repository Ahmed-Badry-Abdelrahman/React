import FetchData from "./components/FetchData";
import Fetch2 from "./components/Fetch2";
function App() {
  const style = {
    backgroundColor: "#eee",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    gap: "100px",
  };

  return (
    <div className="App" style={style}>
      <FetchData />
      <Fetch2 />
    </div>
  );
}

export default App;
