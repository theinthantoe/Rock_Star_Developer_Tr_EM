import React from 'react'
import {Box ,Card,CardContent,Typography,IconButton} from "@mui/material"
import {Alarm as TimeIcon,AccountCircle as UserIcon , Delete as DeleteIcon} from "@mui/icons-material"

export default function Item({item,remove}) {
    return (
       <Card sx={{mb: 2}}> 
        <CardContent>
            <Box sx={{ display :"flex" ,flexDirection : 'row' ,justifyContent : "space-between"}}>
                <Box sx={{display : 'flex' , flexDirection : "row", alignItems : "center" , gap :1}}>
                    <TimeIcon fontSize='10' color='success'/>
                    <Typography variant='caption' sx={{color : "skyblue"}}>A few second ago</Typography>

                </Box>
                <IconButton fontSize="small" onClick={()=>remove(item.id)}><DeleteIcon fontSize='inherit'/></IconButton>
                <Typography sx={{my :3}}>{item.context}</Typography>
            </Box>
            <Box sx={{display : "flex" ,flexDirection :"row", alignItems : "center",gap :1}}>
                <UserIcon fontSize='12' color='info'/>
                <Typography variant='caption'>{item.name}</Typography>
            </Box>
        </CardContent>
       </Card>
    )
}

