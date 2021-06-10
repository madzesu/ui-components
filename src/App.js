import React from "react";
import styled from "styled-components";
import "./App.css";
import PageRouter from "./components/PageRouter";
import Typography from "./components/Typography";
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
      <PageRouter />
    </AppContainer>
  );
};

export default App;
