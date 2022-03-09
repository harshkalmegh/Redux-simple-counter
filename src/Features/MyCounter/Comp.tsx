import React from "react";
import { Link } from "react-router-dom";

function Comp(props: any) {
  console.log(props);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/comp">Comp</Link>
      <p>{props.counter.count}</p>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
}

export default Comp;
