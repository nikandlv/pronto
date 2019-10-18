import React from 'react'
import { Paper, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'


export default function Comment() {
    return (
        <div>
            <Paper>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={'/img/user.png'} />
                    </ListItemAvatar>
                    <ListItemText primary="Nikan Dalvand" secondary="Oct 12 2019" />
                </ListItem>
            </Paper>
        </div>
    )
}