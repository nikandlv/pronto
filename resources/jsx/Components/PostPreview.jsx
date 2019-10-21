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
        maxHeight: 600,
        width: '100%'
    },
    img: {
        maxHeight: 600,
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

export default function PostPreview(props) {
    const title = props.title || "--"
    const date = props.date || "--"
    const image = props.image || "--"
    const description = props.description || "--"
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
                    title={title}
                    subheader={date}
            />
            <Menu open={Boolean(menuEl)} anchorEl={menuEl} onClose={() => {
                setMenuEl(null)
            }}>
                <MenuItem onClick={() => {
                    window.open('/post/slug','_blank');
                }}>Open in a new tab</MenuItem>
            </Menu>
            <CardMedia
                    className={styles.media}
                    image={image}
                    title={title}
                >
                    <img src={image} className={styles.img} />
                    </CardMedia>
            <CardContent>
                {description}
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