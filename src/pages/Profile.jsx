import { Avatar, Box, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Item from "../components/Item";

export default function Profile(){
    return(
        <Box>
            <Box sx={{background : "banner" , height : 150 , borderRadius : 4}}/>
            <Box sx={{mb : 4 , mt : -"60px",
            display : "flex",flexDirection : "column",justifyContent : "center", alignItems :'center',gap :1
        }}>
            <Avatar sx={{width : 100, height :100 ,bgcolor : pink[500]}}/>
            <Box sx={{textAlign : "center"}}>
                <Typography>
                    Alice
                </Typography>
                <Typography sx={{font : "0.8em",color : "text.fade"}}>
                    Alice Profile Bio
                </Typography>
            </Box>
            </Box>
            <Item key={1} remove={()=>{}} item={{id :1 ,commet : "Alice comment",name : "Alice"}}/>
        </Box>
    )
}