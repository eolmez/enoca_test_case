import React, { useState, useContext } from "react";
import Keyboard from "../components/Keyboard/Keyboard";
import Screen from "../components/Screen/Screen";
import Header from "../components/Header/Header";
import { ThemeContext } from "../ThemeContext";
import "./Calculator.css";

function Calculator() {
  const [prevAnswer, setPrevAnswer] = useState("");
  const [answer, setAnswer] = useState("0");
  const [operand, setOperand] = useState("");
  const context = useContext(ThemeContext);

  const handleOperand = (e) => {
    const value = e.target.value;

    setOperand((operand) => operand + value);
  };

  const handleOperator = (e) => {
    const value = e.target.value;

    if (value === "=") {
      if (operand === "") return;
    }

    if (value === "%") {
      if (operand === "") return;
    }
    if (value === "+/-") {
      if (operand === "") return;
    }

    if (value === "AC") {
      setOperand("");
      setAnswer(0);

      if (answer > 0) setPrevAnswer(answer);
      return;
    }

    let newOperand;
    if (operand.slice(-1) === value) {
      newOperand = operand.slice(0, -1);
      setOperand(newOperand + value);
    } else {
      if (!Number(operand.slice(-1))) {
        newOperand = operand.slice(0, -1);

        if (Number(operand.slice(-1)) === 0) {
          setOperand(newOperand + `0` + value);
          return;
        } else {
          setOperand(newOperand + value);
          return;
        }
      }
    }

    if (!(operand === "." || operand.includes("."))) {
      setOperand((operand) => operand + value);
    }

    switch (value) {
      case "AC":
        setOperand("");
        break;
      case "+/-":
        setOperand(`${eval(operand * -1)}`);
        break;
      case "%":
        setAnswer(`${eval(operand / 100)}`);
        setOperand("");
        break;
      case "=":
        setOperand("");
        setAnswer(eval(operand));
        if (answer > 0) setPrevAnswer(answer);
        break;
      default:
        return;
    }
  };

  console.log(prevAnswer);

  return (
    <div className={`calculator ${context.theme}`}>
      <Header prevAnswer={prevAnswer} />
      <Screen operand={operand} answer={answer} />
      <Keyboard handleOperator={handleOperator} handleOperand={handleOperand} />
    </div>
  );
}

export default Calculator;
