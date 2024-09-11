import React, { useState } from "react";
import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [isResultShown, setIsResultShown] = useState(false);

    const handleButtonClick = (value) =>{
      // If result is shown and a number is pressed, clear input and start new calculation
      if (isResultShown && !isNaN(value)) {
        setInput(value); 
        setResult(""); 
        setIsResultShown(false); 
      } else if (value === 'C') {
            setInput('');
            setResult('');
            setIsResultShown(false);
        } else if (value === '←') {
            setInput(input.slice(0,-1));
        } else if (value === '=') {
            calculateResult();
        } else {
            if (isValidInput(value)) {
                setInput(input + value);
            }
        }
    };

    // Prevent adding multiple consecutive operators or decimals
  const isValidInput = (value) => {
    // Prevent consecutive operators
    const lastChar = input.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return false;
    }
    // // Prevent multiple decimals
    if (value === ".") {
      const parts = input.split(/[+\-*/]/); // Split by operators
      const lastPart = parts[parts.length - 1]; // Get the last operand
      if (lastPart.includes(".")) {
        return false; // Already has a decimal point in this operand
      }
    }
    return true;
};

  const calculateResult = () => {
    try {
      const evalResult = evaluateExpression(input);
      const formattedResult = parseFloat(evalResult.toPrecision(9));
      setResult(formattedResult.toString());
      setIsResultShown(true);
    } catch (error) {
      setResult(error);
    }
  };

  // Custom evaluation logic instead of eval()
  // Simple algorithm to parse and calculate expressions
  const evaluateExpression = (expression) => {
    const operators = [];
    const operands = [];
    let currNumber = "";

    for (let char of expression) {
      if ("+-*/".includes(char)) {
        // negative number
        if (currNumber === "" && char === "-") {
          currNumber = "-";
        } else {
          operands.push(parseFloat(currNumber));
          operators.push(char);
          currNumber = ""; // Reset current number after an operator
        }
      } else {
        currNumber += char;
      }
    }
    operands.push(parseFloat(currNumber)); // Push the last number

    // Handle multiplication and division first
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "*" || operators[i] === "/") {
        const result = performOperation(
          operands[i],
          operands[i + 1],
          operators[i]
        );
        operands.splice(i, 2, result); // Replace the two operands with the result
        operators.splice(i, 1); // Remove the operator
        i--; // Step back to account for the removed element
      }
    }

    // Handle addition and subtraction after
    while (operators.length) {
      const result = performOperation(operands[0], operands[1], operators[0]);
      operands.splice(0, 2, result); // Replace the two operands with the result
      operators.splice(0, 1); // Remove the operator
    }

    return operands[0]; // Final result is in operands[0]
  };
    

    const performOperation = (a, b, operator) => {
        switch (operator) {
            case '+':
              return a + b;
            case '-':
              return a - b;
            case '*':
              return a * b;
            case '/':
              return b === 0 ? 'Error' : a / b; // Handle division by zero
            default:
              return 0;        
        };
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {['7', '8', '9', '/'].map((btn) => (
                <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
                ))}
                {['4', '5', '6', '*'].map((btn) => (
                <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
                ))}
                {['1', '2', '3', '-'].map((btn) => (
                <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
                ))}
                {['0', '.', 'C', '+'].map((btn) => (
                <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
                ))}
                <button onClick={() => handleButtonClick('←')}>←</button>
                <button onClick={() => handleButtonClick('=')}>=</button>
            </div>
        </div>
    );
}

export default Calculator;