import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ab003c",
      main: "#f50057",
      dark: "#ab003c",
      contrastText: "#000"
    }
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Home />
  </MuiThemeProvider>,
  document.getElementById("root")
);
