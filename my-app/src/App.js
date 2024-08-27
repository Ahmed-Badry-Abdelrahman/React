import Counter from "./components/useMemo/Counter";
function App() {
  const style = {
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  };

  return (
    <div className="App" style={style}>
      <Counter />
    </div>
  );
}

export default App;
