import React from 'react'
import { Card, CardContent, makeStyles, CardHeader, CardMedia, Avatar, IconButton, CardActions, Button, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Favorite from '@material-ui/icons/FavoriteBorderOutlined';
import Message from '@material-ui/icons/MessageOutlined';
import CollisionLink from './CollisionLink';
const useStyles = makeStyles({
    card: {
        borderRadius: 16
    },
    media: {
        maxHeight: 400,
        width: '100%'
    },
    img: {
        maxHeight: 400,
        width: '100%',
        visibility: 'hidden'
    },
    readMore: {
        borderRadius: '3rem'
    },
    push: {
        flexGrow: 1
    }
})

export default function PostPreview() {
    const [menuEl, setMenuEl] = React.useState()
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardHeader 
                avatar={
                    <Avatar src={'/img/user.png'} />
                    }
                    action={
                    <IconButton aria-label="settings" onClick={(event) => {
                        setMenuEl(event.currentTarget)
                    }}>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="How to get over something simple"
                    subheader="October 1, 2019"
            />
            <Menu open={Boolean(menuEl)} anchorEl={menuEl} onClose={() => {
                setMenuEl(null)
            }}>
                <MenuItem>Open in a new tab</MenuItem>
            </Menu>
            <CardMedia
                    className={styles.media}
                    image={'/img/post-1.jpg'}
                    title="Paella dish"
                >
                    <img src={'/img/post-1.jpg'} className={styles.img} />
                    </CardMedia>
            <CardContent>
                Hello!
            </CardContent>
            <CardActions>
                <IconButton color="secondary">
                    <Favorite />
                </IconButton>
                <IconButton>
                    <Message />
                </IconButton>
                <div className={styles.push}/>
                <Button component={CollisionLink} to="/post/slug" className={styles.readMore} size="small" color="primary" variant="contained">
                    Read more
                </Button>
            </CardActions>
        </Card>
    )
}