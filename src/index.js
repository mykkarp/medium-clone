import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routers from "Routers.js";
import TopBar from "components/TopBar/TopBar.js"
import "./index.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"


const App = () => {
  const [isDarkTheme, SetDarkTheme] = useState(false)
  const theme = createMuiTheme({
    palette: {
      type: isDarkTheme ? "dark" : "light",
    },
  })

  const toggleThemeHandler = () => {
    SetDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeProvider theme={theme}>
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
