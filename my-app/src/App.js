import CounterOne from "./components/useReducer/CounterOne";
function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App" style={style}>
      <CounterOne />
    </div>
  );
}

export default App;
