import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/darkTheme";
import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Auth from "./Page/Auth/Auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./ReduxToolKit/TaskSlice";
import { getUserProfile } from "./ReduxToolKit/AuthSlice";

function App() {
  //const user = true;
  const dispatch = useDispatch();
  const {task, auth} = useSelector(store => store)

  useEffect(() => {
    dispatch(fetchTasks({}));
    dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>

     {auth.user ? <div>
        <Navbar/>
        <Home/>
      </div> : <Auth/>}
    
    </ThemeProvider>
  );
}

export default App;
