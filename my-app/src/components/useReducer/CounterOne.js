import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "reset":
      return initialState;
    case "incrementAll":
      return state + action.value;
    default:
      return state;
  }
};
const CounterOne = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTow, dispatchTow] = useReducer(reducer, initialState);
  const [countThree, dispatchThree] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>Counter One :- {countOne}</h1>
        <h1>Counter Tow :- {countTow}</h1>
        <h1>Counter Three :- {countThree}</h1>
      </div>
      <div>
        <button onClick={() => dispatchOne({ type: "increment", value: 1 })}>
          increment by 1
        </button>
        <button onClick={() => dispatchOne({ type: "increment", value: 5 })}>
          increment by 5
        </button>
        <button onClick={() => dispatchOne({ type: "increment", value: 10 })}>
          increment by 10
        </button>
      </div>
      <div>
        <button onClick={() => dispatchTow({ type: "increment", value: 1 })}>
          increment by 1
        </button>
        <button onClick={() => dispatchTow({ type: "increment", value: 5 })}>
          increment by 5
        </button>
        <button onClick={() => dispatchTow({ type: "increment", value: 10 })}>
          increment by 10
        </button>
      </div>
      <div>
        <button onClick={() => dispatchThree({ type: "increment", value: 1 })}>
          increment by 1
        </button>
        <button onClick={() => dispatchThree({ type: "increment", value: 5 })}>
          increment by 5
        </button>
        <button onClick={() => dispatchThree({ type: "increment", value: 10 })}>
          increment by 10
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatchOne({ type: "reset" });
            dispatchTow({ type: "reset" });
            dispatchThree({ type: "reset" });
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            dispatchOne({ type: "incrementAll", value: 5 });
            dispatchTow({ type: "incrementAll", value: 5 });
            dispatchThree({ type: "incrementAll", value: 5 });
          }}
        >
          increment All by 5
        </button>
      </div>
    </div>
  );
};

export default CounterOne;
