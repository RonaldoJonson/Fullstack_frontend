import React from "react";
import Routes from "./Router";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import DarkTheme from './Themes/DarkTheme';

import CreateGlobalStyle from './GlobalStyling';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DarkTheme}>
        <CreateGlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;