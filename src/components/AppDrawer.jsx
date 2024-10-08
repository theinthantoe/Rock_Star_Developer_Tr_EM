import {Box,Drawer,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Avatar,Typography} from "@mui/material"

import{Home as HomeIcon,Person as ProfileIcon , Login as LoginIcon,Logout as LogoutIcon,PersonAdd as RegisterIcon} from "@mui/icons-material"
import {deepPurple} from "@mui/material/colors"
import { useApp } from "../ThemeApp"
import { useNavigate } from "react-router-dom"

export default function AppDrawer(){
    const {showDrawer,setShowDrawer,auth,setAuth} = useApp()
    const navigate = useNavigate()
    return(
        <div>
            <Drawer open={showDrawer} onClose={()=>setShowDrawer(false)}>
                <Box sx={{mb : 6 ,width : 300 , height :140 , bgcolor : "banner", position : "relative"}}>
                    <Box sx={{ display : "flex" ,flexDirection : "row" ,alignItems : "center", position : "absolute",left : 20, bottom : -30, gap :2}}>
                        <Avatar sx={{width : 94, height :94 ,color : "white" ,background : deepPurple[500]}}/>
                        <Typography sx={{fontWeight : "bold"}}>Alice</Typography>
                    </Box>
                </Box>
                <List>
                    <ListItem>
                        <ListItemButton onClick={()=> navigate('/')}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        
                        </ListItemButton>
                    </ListItem>

                    <Divider/>
            {
                auth && (
                    <>
                    <ListItem>
                        <ListItemButton onClick={()=> navigate('/profile/1')}>
                            <ListItemIcon>
                                <ProfileIcon/>
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={()=> setAuth(null)}>
                            <ListItemIcon>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText>Log Out</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </>
                )
            }
               {
                !auth && (
                    <>
                    <ListItem>
                        <ListItemButton onClick={()=> navigate('/register')}>
                            <ListItemIcon>
                                <RegisterIcon/>
                            </ListItemIcon>
                            <ListItemText>Register</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={()=> navigate("/login")}>
                            <ListItemIcon>
                                <LoginIcon/>
                            </ListItemIcon>
                            <ListItemText>Log In</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    </>
                )
            }
                </List>

            </Drawer>
          
        </div>
    )
}