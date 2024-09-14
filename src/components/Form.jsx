import { useRef } from "react";
import {TextField, Button,Box} from "@mui/material"

export default function Form({add}) {
    const contextRef = useRef()
    return(
        <form 
    onSubmit={(e)=>{
        e.preventDefault()
        const context = contextRef.current.value;
        add("Alice",context)
        e.currentTarget.reset()
    }}>
            <Box sx={{mb : 4 ,textAlign : "right"}}>
            <TextField type="text" placeholder="Context" sx={{mb: 1}} fullWidth multiline inputRef={contextRef}/>
            <Button type="submit" variant="contained">Post</Button>
            </Box>
        </form>
    )
}