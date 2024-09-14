import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useApp } from "../ThemeApp";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const {setAuth} = useApp()
    const navigate = useNavigate()
    return(
        <Box>
            <Typography variant="h3">Login Form</Typography>
            <Alert severity="warning" sx={{mt :2}}>All fields are required</Alert>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                setAuth(true)
                navigate("/")
            }}>
                <Box sx={{display : "flex", flexDirection : "column", gap : 2 ,mt :2}}>
                    <TextField placeholder="username" fullWidth/>
                    <TextField placeholder="password" fullWidth/>
                    <Button type="submit" variant="contained" fullWidth>Login</Button>
                </Box>
            </form>
        </Box>
    )
}