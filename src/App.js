import React from "react";
import styled from "styled-components";
import "./App.css";
import ButtonDemo from "./components/Button/ButtonDemo";
import Typography from "./components/Typography";
import TypographyDemo from "./components/Typography/TypographyDemo";
// import CheckboxDemo from "./components/Checkbox/CheckboxDemo";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #eeeeee;
  padding: 24px;
`;

const App = () => {
  return (
    <AppContainer>
      <Typography variant="h1">UI components by Madzesu</Typography>
      <TypographyDemo />
      <ButtonDemo />
    </AppContainer>
  );
};

export default App;
