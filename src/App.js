import "./styles.css";
import { useReducer, useState } from "react";
export default function App() {
  // const [age, setAge] = useState(25);
  const initialState = {
    age: 25
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "upgrade":
        return { age: state.age + 1 };
      case "downgrade":
        return { age: state.age - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>useReducer Hook</h1>
      <p>Hello my age is {state.age}</p>
      {/* <button onClick={()=> {setAge(age + 1)}}>Update Age</button>
     <button onClick={()=> {setAge(age - 1)}}>Downgrade Age</button> */}
      <button onClick={() => dispatch({ type: "upgrade" })}>upgrade</button>
      <button onClick={() => dispatch({ type: "downgrade" })}>downgrade</button>
    </div>
  );
}
