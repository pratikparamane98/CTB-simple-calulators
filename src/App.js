import './App.css';
import Display from './components/display/Display.js'
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {
  const [theme, setTheme] = useState("light");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };
  return (
    <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button className= "button02" onClick={() => themeToggler()}>Change BG</button>

        {/* <StyledApp>
        </StyledApp> */}
    </ThemeProvider>
    <Display/>
</>

  );
}

export default App;
