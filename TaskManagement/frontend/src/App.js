import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/darkTheme";
import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Auth from "./Page/Auth/Auth";
import { useState } from "react";

function App() {
  const user = true;

  return (
    <ThemeProvider theme={darkTheme}>

     {user ? <div>
        <Navbar/>
        <Home/>
      </div> : <Auth/>}
    
    </ThemeProvider>
  );
}

export default App;
