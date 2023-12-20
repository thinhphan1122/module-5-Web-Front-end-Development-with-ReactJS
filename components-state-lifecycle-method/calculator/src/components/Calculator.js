import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "number1") {
      setNumber1(value);
    } else if (name === "number2") {
      setNumber2(value);
    }
  };

  const handleAddition = () => {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseInt(number1) - parseInt(number2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseInt(number1) * parseInt(number2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseInt(number1) / parseInt(number2);
    setResult(quotient);
  };

  return (
    <div>
      <table style={{ border: "1px solid" }}>
        <input
          type="text"
          name="number1"
          value={number1}
          onChange={handleInputChange}
        />
        <br></br>
        <input
          type="text"
          name="number2"
          value={number2}
          onChange={handleInputChange}
        />
        <br></br>
        <p>Result: {result}</p>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </table>
    </div>
  );
}

export default Calculator;
