import React from 'react'
import { Paper, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    comment: {
        borderRadius: 16
    }
})

export default function Comment() {
    const styles = useStyles()
    return (
        <div>
            <Paper className={styles.comment}>
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