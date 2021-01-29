import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routers from "Routers.js";
import TopBar from "components/TopBar/TopBar.js";
import "./index.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { lightBlue, indigo, deepPurple, pink } from "@material-ui/core/colors";


const App = () => {
  const [isDarkTheme, SetDarkTheme] = useState(!!localStorage.getItem("isDarkTheme"))
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: lightBlue[900],
      },
      secondary: {
        main: indigo[900],
      },
    },
  })
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
    },
    primary: {
      main: deepPurple.A200,
    },
    secondary: {
      main: pink[700],
    },
  })

  const toggleThemeHandler = () => {
    SetDarkTheme((prevTheme) => {
      localStorage.setItem("isDarkTheme", !prevTheme);
      return (!prevTheme)
    });

  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Paper>
        <BrowserRouter>
          <TopBar toggleTheme={toggleThemeHandler} isDarkTheme={isDarkTheme} />
          <Routers />
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
