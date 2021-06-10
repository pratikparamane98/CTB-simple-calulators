import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../toggle/themes.js";
import {Button,Box} from '@material-ui/core'



const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {
  const [theme, setTheme] = useState("light");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };
  return (
    <div>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Box textAlign="center">
      <Button variant = "outlined" color="secondary" onClick={() => themeToggler()}>Change BG</Button>
      </Box>
        {/* <StyledApp>
        </StyledApp> */}
    </ThemeProvider>
    
    </div>
  );
}

export default App;
