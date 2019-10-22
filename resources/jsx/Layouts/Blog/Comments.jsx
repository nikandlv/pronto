import React from 'react'
import { Grid, Avatar } from '@material-ui/core'
import Comment from '../../Components/Comment'
import Message from '@material-ui/icons/MessageOutlined'

export default function Comments() {
    return (
        <section>
            <Avatar>
                <Message />
            </Avatar>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Comment />
                </Grid>
                <Grid item xs={12}>
                    <Comment />
                </Grid>
            </Grid>
        </section>
    )
}