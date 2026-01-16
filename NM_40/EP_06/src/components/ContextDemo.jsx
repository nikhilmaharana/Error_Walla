import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextDemo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Context API Demo</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ContextDemo;
