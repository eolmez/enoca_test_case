import Button from "../Button/Button";
import "./Keyboard.css";

const Keyboard = ({ handleOperator, handleOperand }) => {
  const rightButtons = ["/", "*", "-", "+", "="];
  const topButtons = ["AC", "+/-", "%"];
  const numButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "00"];
  return (
    <div className="keyboard">
      <div className="keyboard-left">
        <div className="keyboard-left-top">
          {topButtons.map((btn, i) => (
            <Button
              value={btn}
              key={i}
              handler={isNaN(btn) ? handleOperator : handleOperand}
            />
          ))}
        </div>
        <div className="keyboard-left-bottom">
          {numButtons.map((btn, i) => (
            <div className="keyboard-left-bottom-btn" key={i}>
              <Button
                value={btn}
                
                handler={isNaN(btn) ? handleOperator : handleOperand}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="keyboard-right">
        {rightButtons.map((btn, i) => (
          <Button
            value={btn}
            key={i}
            handler={isNaN(btn) ? handleOperator : handleOperand}
          />
        ))}
      </div>
      <div className="stick"></div>
    </div>
  );
};

export default Keyboard;
