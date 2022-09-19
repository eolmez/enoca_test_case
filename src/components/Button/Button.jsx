import "./Button.css";

const Button = ({ value, handler }) => {
  return (
    <button type="button" value={value} onClick={handler}>
      {value}
    </button>
  );
};

export default Button;
