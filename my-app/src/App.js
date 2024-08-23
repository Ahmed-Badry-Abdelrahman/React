// import { ListDisplay } from "./components/Lists";
// import { Form } from "./components/Form";
// import { GetPosts } from "./components/GetPosts";
// import { ListDisplay } from "./components/ListDisplay";

import { FullName } from "./components/useState/FullName";

// import { Counter } from "./components/useState/counter";

// import { Counter } from "./components/useState/Counter";

// import { PostPosts } from "./components/PostPosts";
function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div className="App" style={style}>
      <FullName />
    </div>
  );
}

export default App;
