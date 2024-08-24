// import { HookOne } from "./components/useEffect/HookOne";

import { FetchData } from "./components/useEffect/fetch";
import { GetData } from "./components/useEffect/GetBtn";
function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App" style={style}>
      <GetData />
    </div>
  );
}

export default App;
