import React from 'react'
import { Grid } from '@material-ui/core'
import Comment from '../../Components/Comment'

export default function Comments() {
    return (
        <section>
            <Grid container spacing={2}>
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