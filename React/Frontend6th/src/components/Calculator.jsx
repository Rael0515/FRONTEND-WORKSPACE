import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    if (val === "Clear") {
      setValue("");
    } else if (val === "C") {
      setValue((prev) => prev.slice(0, -1));
    } else if (val === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } else {
      setValue((prev) => prev + val);
    }
  };

  const buttonLayout = [
    ["Clear", "C", "+"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "/"],
    ["0", ".", "="],
  ];

  return (
    <div className="calculator-section">
      <div className="calc-container">
        <div className="calc-display">{value === "" ? "0" : value}</div>

        <div className="calc-buttons">
          {buttonLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="calc-row">
              {row.map((btn, idx) => {
                const isFunc = ["+", "-", "*", "/", "Clear", "C"].includes(btn);
                const isWide = ["Clear", "="].includes(btn);

                return (
                  <button
                    key={idx}
                    onClick={() => handleClick(btn)}
                    className={`${isFunc ? "func-btn" : ""} ${
                      isWide ? "wide-btn" : ""
                    }`}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
