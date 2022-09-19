import { useState } from "react";
import "./App.css";
import Calculator from "./pages/Calculator";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Calculator />
    </ThemeContext.Provider>
  );
}

export default App;
