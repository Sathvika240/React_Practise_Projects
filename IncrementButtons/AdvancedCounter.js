import Counter from "./Counter";
import { useState } from "react";

function AdvancedCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currentDate = new Date();
  const tenDaysLater = new Date(currentDate);
  tenDaysLater.setDate(tenDaysLater.getDate() + count);

  function handleClick() {
    setStep((step) => step + 1);
  }
  function handleCount() {
    setCount((count) => count + step);
  }
  function handleCountMinus() {
    setCount((count) => count - step);
  }
  function handleClickMinus() {
    setStep((step) => step - 1);
  }
  function handleReset() {
    setStep((step) => 1);
    setCount((count) => 0);
  }
  function handleChange(event) {
    const newValue = parseInt(event.target.value);
    setStep(newValue);
  }

  return (
    <div>
      <input
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={handleChange}
      />
      <Counter
        name={step}
        label="step"
        onSelectMinus={handleClickMinus}
        onSelectPlus={handleClick}
      />
      <Counter
        name={count}
        label="count"
        onSelectMinus={handleCountMinus}
        onSelectPlus={handleCount}
      />

      <div className="counter">
        {count === 0 ? (
          <p>Today is {currentDate.toDateString()}</p>
        ) : (
          <p>
            {count} days from today is {tenDaysLater.toDateString()}{" "}
          </p>
        )}
      </div>
      <>
        <button onClick={() => handleReset()}>Reset</button>
      </>
    </div>
  );
}
export default AdvancedCounter;
