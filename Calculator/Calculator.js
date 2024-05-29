import { useState } from "react";
import "./Calculator.css";

const table = [
  ["C", "CE", "/", "X"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["+/-", "0", ".", "="],
];

export default function Calculator() {
  const [dispayText, setDisplayText] = useState("");

  function handleDisplayText(value) {
    if (value === "=") {
      try {
        const result = eval(dispayText);
        setDisplayText(result.toString());
      } catch (error) {
        setDisplayText("Error");
      }
    } else if (value === "C" || value === "X") {
      setDisplayText("");
    } else if (value === "CE") {
      setDisplayText((prevValue) => prevValue.slice(0, -1));
    } else {
      setDisplayText((prevValue) => prevValue + value);
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <p className="displayText">{dispayText}</p>
        </div>
        <table>
          <tbody>
            {table.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} onClick={() => handleDisplayText(col)}>
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
