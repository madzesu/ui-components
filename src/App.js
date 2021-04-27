import React from "react";
import "./App.css";
import ButtonDemo from "./components/Button/ButtonDemo";
import CheckboxDemo from "./components/Checkbox/CheckboxDemo";

const App = () => {
  return (
    <div className="App">
      <h1>UI components by Madzesu</h1>
      <ButtonDemo />
      <CheckboxDemo />
    </div>
  );
};

export default App;
