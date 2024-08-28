import List from "./components/useTransition/list";
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
      <List />
    </div>
  );
}

export default App;
