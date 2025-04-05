import React, { useState } from "react";

const hookState = () => {
  const [Count, setCount] = useState(0);

  const handlevalue = () => {
    setCount(() => Count + 1);
  };
  return (
    <>
      <h1>{Count}</h1>
      <button onClick={handlevalue}>Increment</button>
    </>
  );
};

export default hookState;
