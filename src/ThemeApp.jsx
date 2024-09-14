import { createContext, useState ,useContext,useMemo} from "react";
import {CssBaseline,ThemeProvider,createTheme} from "@mui/material"
import {deepPurple,grey} from "@mui/material/colors"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";


const AppContext = createContext();


export  function useApp(){
    return(
        useContext(AppContext)
    )
}

const router = createBrowserRouter([{
    path : "/",
    element : <Template/>,
    children : [{
        path : "/",
        element : <Home/>
    }],
}])

export default function ThemeApp(){
    const[showDrawer,setShowDrawer] = useState(false)
    const[auth,setAuth] = useState(null)
    const[globalMsg,setGlobalMsg] = useState(null)
    const [showForm,setShowForm] = useState(false)
    const [mode,setMode] = useState("dark")

    const theme = useMemo(()=>{
        return createTheme({
            palette : {mode},
            primary : deepPurple,
            banner : mode === "dark"? grey[800] : grey[200],
            text : {
                fade : grey[500]
            }
        })
    },[mode])

    return(
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{showForm,setShowForm,mode,setMode,showDrawer,setShowDrawer,auth,setAuth,globalMsg,setGlobalMsg}}>
                <CssBaseline/>
                <RouterProvider router={router}/>
            </AppContext.Provider>
        </ThemeProvider>
    )
}