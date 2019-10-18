import React from 'react'
import { Paper, List, ListItem, ListItemText, ListItemAvatar, IconButton } from "@material-ui/core";

import AttachmentIcon from '@material-ui/icons/AttachmentOutlined'

function Attachment(props) {
    const name = props.name || "filename"
    return (
        <ListItem button>
            <ListItemAvatar>
                <IconButton>
                    <AttachmentIcon />
                </IconButton>
            </ListItemAvatar>
            <ListItemText primary={name} />
        </ListItem>
    )
}

export default function Attachments() {
    return (
        <Paper>
            <List>
                <Attachment />
            </List>
        </Paper>
    )
}