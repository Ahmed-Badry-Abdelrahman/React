import A from "./components/A";

function App() {
  const style = {
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    gap: "100px",
  };

  return (
    <div className="App" style={style}>
      <A />
    </div>
  );
}

export default App;
