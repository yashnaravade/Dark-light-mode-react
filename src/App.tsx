import React from "react";
import "./App.css";
import Form from "./components/Form";
import ReactSwitch from "react-switch";

export const ThemeContext = React.createContext("null");

function App() {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label> {theme === "dark" ? "Dark Mode" : "Light Mode"} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
