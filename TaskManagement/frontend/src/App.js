import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/darkTheme";
import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Auth from "./Page/Auth/Auth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>

      {/* <Navbar/>
      <Home/> */}
      <Auth/>
    
    </ThemeProvider>
  );
}

export default App;
