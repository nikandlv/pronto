import React from 'react'
import { Paper, List, ListItem, ListItemText, ListItemAvatar, IconButton, Typography } from "@material-ui/core";

import AttachmentIcon from '@material-ui/icons/AttachmentOutlined'

function Attachment(props) {
    const name = props.name || "filename"
    return (
        <ListItem button>
            <ListItemAvatar>
                    <AttachmentIcon />
            </ListItemAvatar>
            <ListItemText primary={name} />
        </ListItem>
    )
}

export default function Attachments() {
    return (
        <Paper>
            <Typography variant="h5">
                Attachments
            </Typography>
            <List>
                <Attachment />
            </List>
        </Paper>
    )
}