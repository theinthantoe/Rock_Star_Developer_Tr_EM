import{Box ,Typography,AppBar,IconButton,Toolbar} from "@mui/material"
import{Menu as MenuIcon ,Add as AddIcon , LightMode as LightModeIcon,DarkMode as DarkModeIcon} from "@mui/icons-material"
import {useApp} from "../ThemeApp"

export default function Header(){
    const {showForm,setShowForm,mode,setMode} = useApp()
    // console.log(showForm,setShowForm)
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" edge="start">
                    <MenuIcon/>
                </IconButton>
                <Typography sx={{flexGrow : 1,ml :2}}>Yaycha</Typography>
                <Box>
                    <IconButton onClick={()=>setShowForm(!showForm)} color="inherit"><AddIcon/></IconButton>
                    {mode === "dark"? 
                    <IconButton color="inherit" edge="end" onClick={()=>setMode('light')}><LightModeIcon/></IconButton> :
                    <IconButton color="inherit" edge="end" onClick={()=>setMode("dark")}><DarkModeIcon/></IconButton> 
                }
                </Box>
            </Toolbar>

        </AppBar>
    )
}