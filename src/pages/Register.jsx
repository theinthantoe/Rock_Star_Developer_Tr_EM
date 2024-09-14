import { Alert, Box, Button, TextField, Typography } from "@mui/material"

export default function Register(){

    return(
        <Box>
            <Typography variant="h3">Register From</Typography>
            <Alert severity="warning" sx={{mt : 2}}>All fields are required</Alert>
            <form>
                <Box sx={{
                    display : "flex",flexDirection : 'column',gap: 2, mt :2
                }}>
                    <TextField placeholder="Name" fullWidth/>
                    <TextField placeholder="username" fullWidth/>
                    <TextField placeholder="bio" fullWidth/>
                    <TextField type="password" placeholder="password" fullWidth/>
                    <Button type="submit" variant="contained">Register</Button>
                </Box>
            </form>
        </Box>
    )
};