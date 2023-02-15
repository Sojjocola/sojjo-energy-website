import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import sojjoTheme from "./theme";
import SojjoMenu from "./components/SojjoMenu";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <ThemeProvider theme={sojjoTheme}>
      <CssBaseline />
      <div className="app">
        <SojjoMenu></SojjoMenu>
        <main className="content">
          <TopBar></TopBar>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
