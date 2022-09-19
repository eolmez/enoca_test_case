import "./Screen.css";

const Screen = ({ operand, answer }) => {
  return (
    <div className="calc-screen">
      <div className="calc-compute">
        <span>{operand ? operand : "0"}</span>
      </div>
      <div className="calc-answer">
        <span className="equals">=</span>
        <span className="answer">{answer}</span>
      </div>
    </div>
  );
};

export default Screen;
