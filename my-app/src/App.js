import UploadPost from "./components/TestAPI/UploadPost";
function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App" style={style}>
      <UploadPost />
    </div>
  );
}

export default App;
