import React from "react";

function Component(props: any) {
  return (
    <div>
      <p>{props.counter.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

export default Component;
