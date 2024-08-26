import FetchPosts from "./components/useReducer/FetchData";
import DisplayPosts from "./components/useState/FetchData";
function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App" style={style}>
      <DisplayPosts />
    </div>
  );
}

export default App;
