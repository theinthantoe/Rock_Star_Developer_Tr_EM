import { Box, Button, TextField } from "@mui/material";
import Item from "../components/Item";

export default function Comments(){
    return(
        <Box>
            <Item primary key={1} item={{id : 1 ,comment : "Alice comment", name : "Alice"}} remove={()=>{}}/>
            <Item primary key={2} item={{id : 2 ,comment : "Bob comment", name : "Bob"}} remove={()=>{}}/>
            <Item primary key={3} item={{id : 3 ,comment : "Alice comment", name : "Alice"}} remove={()=>{}}/>
            <form>
                <Box sx={{display : "flex", flexDirection : "column",gap : 1 ,mt : 3}}>
                    <TextField multiline placeholder="your comment"/>
                    <Button type="submit" variant="contained">Reply</Button>
                </Box>
            </form>
        </Box>
    )
}