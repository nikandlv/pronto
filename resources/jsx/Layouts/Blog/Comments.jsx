import React from 'react'
import { Grid, makeStyles, IconButton } from '@material-ui/core'
import Comment from '../../Components/Comment'
import WriteIcon from '@material-ui/icons/EditOutlined'
import StyledTitle from '../../Components/StyledTitle'

const useStyles = makeStyles({
    wrapper: {
        display: 'flex'
    },
    push: {
        flexGrow: 1
    }
})

export default function Comments() {
    const styles = useStyles()
    return (
        <section>
            <div className={styles.wrapper}>
                <StyledTitle>
                    Comments
                </StyledTitle>
                <div className={styles.push}/>
                <div>
                <IconButton>
                    <WriteIcon />
                </IconButton>
                </div>
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