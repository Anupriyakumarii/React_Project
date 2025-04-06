import React, { useState } from "react";

const hookState = () => {
  const [Count, setCount] = useState(0);

  const handlevalue = () => {
    setCount(() => Count + 1);
  };
  const restvalue = () => {
    setCount(0);
  };
  return (
    <>
      <h1>{Count}</h1>
      <button onClick={handlevalue}>Increment</button>
      <button onClick={restvalue}>Reset</button>
    </>
  );
};

export default hookState;
