import React from 'react'
import { Grid, Avatar, makeStyles } from '@material-ui/core'
import Comment from '../../Components/Comment'
import Message from '@material-ui/icons/MessageOutlined'
import StyledTitle from '../../Components/StyledTitle'

const useStyles = makeStyles({
    
})

export default function Comments() {
    const styles = useStyles()
    return (
        <section>
            <div>
                <StyledTitle>
                    Comments
                </StyledTitle>
            </div>
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