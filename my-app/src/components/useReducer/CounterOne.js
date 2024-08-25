import { useReducer } from "react";

const initialState = {
  counterOne: 0,
  counterTow: 0,
  counterThree: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementCountOne":
      return { ...state, counterOne: state.counterOne + action.value };
    case "incrementCountTow":
      return { ...state, counterTow: state.counterTow + action.value };
    case "incrementCountThree":
      return { ...state, counterThree: state.counterThree + action.value };
    case "incrementAll":
      return {
        ...state,
        counterOne: state.counterOne + action.value,
        counterTow: state.counterTow + action.value,
        counterThree: state.counterThree + action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>Counter One :- {count.counterOne}</h1>
        <h1>Counter Tow :- {count.counterTow}</h1>
        <h1>Counter Three :- {count.counterThree}</h1>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "incrementCountOne", value: 1 })}
        >
          increment by 1
        </button>
        <button
          onClick={() => dispatch({ type: "incrementCountOne", value: 5 })}
        >
          increment by 5
        </button>
        <button
          onClick={() => dispatch({ type: "incrementCountOne", value: 10 })}
        >
          increment by 10
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "incrementCountTow", value: 1 })}
        >
          increment by 1
        </button>
        <button
          onClick={() => dispatch({ type: "incrementCountTow", value: 5 })}
        >
          increment by 5
        </button>
        <button
          onClick={() => dispatch({ type: "incrementCountTow", value: 10 })}
        >
          increment by 10
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "incrementCountThree", value: 1 })}
        >
          increment by 1
        </button>
        <button
          onClick={() => dispatch({ type: "incrementCountThree", value: 5 })}
        >
          increment by 5
        </button>
        <button
          onClick={() => dispatch({ type: "incrementCountThree", value: 10 })}
        >
          increment by 10
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <button onClick={() => dispatch({ type: "incrementAll", value: 5 })}>
          increment All by 5
        </button>
      </div>
    </div>
  );
};

export default CounterOne;
