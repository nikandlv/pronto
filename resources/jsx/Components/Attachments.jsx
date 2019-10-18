import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Typography, Card, CardContent } from "@material-ui/core";

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
        <Card>
            <CardContent>
                <Typography variant="h5">
                    Attachments
                </Typography>
                <List>
                    <Attachment />
                </List>
            </CardContent>
        </Card>
    )
}