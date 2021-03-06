import React from "react";
import { Link } from "react-router-dom";

function Component(props: any) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/comp">Comp</Link>
      <p>{props.counter.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

export default Component;
