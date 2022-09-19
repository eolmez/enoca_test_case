import { useContext } from "react";
import ReactSwitch from "react-switch";
import { AiOutlineHistory } from "react-icons/ai";
import { ThemeContext } from "../../ThemeContext";
import "./Header.css";

const Header = ({ prevAnwser }) => {
  const context = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="switch">
        <ReactSwitch
          height={44}
          width={122}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#003661"
          onHandleColor="#1B6A9C"
          offColor="#A9DCFD"
          offHandleColor="#D8EEFF"
          borderRadius={40}
          onChange={context.toggleTheme}
          checked={context.theme === "dark"}
        />
      </div>
      <div className="calc-history">
        <AiOutlineHistory
          color={context.theme === "dark" ? "white" : "black"}
        />
      </div>
      {/* <div className="calc-history-answer">{prevAnwser}</div> */}
    </div>
  );
};

export default Header;
