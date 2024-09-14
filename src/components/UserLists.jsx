import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

export default function UserLists({title}){
    return(
        <Box>
            <Typography variant="h4">{title}</Typography>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar/>
                    </ListItemAvatar>
                    <ListItemText primary="Alice @alice" secondary="Alice's Profile Bio"/>
                </ListItem>
            </List>
        </Box>
    )
}