import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </>
  );
}

export default Counter;
