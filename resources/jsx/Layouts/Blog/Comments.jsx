import React from 'react'
import { Grid, makeStyles, IconButton, Tooltip, Button, Fab } from '@material-ui/core'
import Comment from '../../Components/Comment'
import WriteIcon from '@material-ui/icons/EditOutlined'
import StyledTitle from '../../Components/StyledTitle'

const useStyles = makeStyles(theme => (
    {
        wrapper: {
            display: 'flex',
            alignItems: 'center'
        },
        push: {
            flexGrow: 1
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
          },
          postComment: {
              textTransform: 'none'
          }
    }
))

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
                <Button className={styles.postComment}>
                <WriteIcon className={styles.extendedIcon} />
                    Post a comment!
                </Button>
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