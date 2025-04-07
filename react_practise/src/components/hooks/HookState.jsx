//Disabling button based on condition for this we use disable element
//when we put step as 5 then value will inc and dec by 5
import React, { useState } from "react";

const hookState = () => {
  const [Count, setCount] = useState(0);
  const [step, setStep] = useState();

  const handlevalue = () => {
    setCount(() => Count + step);
  };
  const decrementvalue = () => {
    setCount(() => Count - step);
  };
  const restvalue = () => {
    setCount(0);
  };
  return (
    <>
      <h1>{Count}</h1>
      <label>
        Steps:
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </label>
      <button onClick={handlevalue} disabled={Count >= 100}>
        Increment
      </button>
      <button onClick={decrementvalue} disabled={Count <= 0}>
        Decrement
      </button>
      <button onClick={restvalue}>Reset</button>
    </>
  );
};

export default hookState;
