import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Typography, Card, CardContent, makeStyles } from "@material-ui/core";

import AttachmentIcon from '@material-ui/icons/AttachmentOutlined'

const useStyles = makeStyles({
    card: {
        borderRadius: 16
    },
})

function Attachment(props) {
    const name = props.name || "filename"
    const styles = useStyles()
    return (
        <ListItem button className={styles.card}>
            <ListItemAvatar>
                    <AttachmentIcon />
            </ListItemAvatar>
            <ListItemText primary={name} />
        </ListItem>
    )
}


export default function Attachments() {
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h5">
                    Attachments
                </Typography>
                <List>
                <Attachment />
                <Attachment />
                <Attachment />
                <Attachment />
                </List>
            </CardContent>
        </Card>
    )
}