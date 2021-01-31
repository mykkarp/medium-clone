import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routers from "Routers.js";
import TopBar from "components/TopBar/TopBar.js";
import particleDark from "ParticlesConfigs/particlesjs-dark.json";
import particleLight from "ParticlesConfigs/particlesjs-light.json";
import "./index.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, indigo, deepPurple, pink } from "@material-ui/core/colors";
import Particles from 'react-particles-js';

const App = () => {
  const [isDarkTheme, SetDarkTheme] = useState(JSON.parse(localStorage.getItem("isDarkTheme")))
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: lightBlue[800],
      },
      secondary: {
        main: indigo[800],
      },
    },
  })
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: deepPurple.A200,
      },
      secondary: {
        main: pink[700],
      },
    },
  })

  function toggleThemeHandler() {
    SetDarkTheme((prevTheme) => {
      localStorage.setItem("isDarkTheme", JSON.stringify(!prevTheme));
      return (!prevTheme)
    });
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Particles params={isDarkTheme ? particleDark : particleLight} style={{ position: "fixed", top: "0", left: "0", right: "0", bottom: "0" }} />
        <TopBar toggleTheme={toggleThemeHandler} isDarkTheme={isDarkTheme} />
        <Routers />
      </BrowserRouter>
    </ThemeProvider >
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
