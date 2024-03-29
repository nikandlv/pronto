import React from 'react'
import { Card, CardContent, makeStyles, CardHeader, CardMedia, Avatar, IconButton, CardActions, Button, Menu, MenuItem, Divider, Breadcrumbs, Paper, Link, Typography } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Favorite from '@material-ui/icons/FavoriteBorderOutlined';
import Home from '@material-ui/icons/HomeOutlined';
import Back from '@material-ui/icons/ChevronLeftOutlined';
import Category from '@material-ui/icons/CategoryOutlined';
import PostIcon from '@material-ui/icons/ReceiptOutlined';
import Message from '@material-ui/icons/MessageOutlined';
import Attachments from '../../Components/Attachments'
import MetaData from '../../Components/MetaData'
import Comments from './Comments'
import Gutter from '../../Components/Gutter';
import StyledTitle from '../../Components/StyledTitle';
const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: 16
    },
    media: {
    },
    img: {
        visibility: 'hidden'
    },
    readMore: {
        borderRadius: '3rem'
    },
    push: {
        flexGrow: 1
    },
    divider: {
        margin: 16
    },
    bread: {
        borderRadius: 16,
        padding: 4
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}))

export default function Post(props) {
    const [menuEl, setMenuEl] = React.useState()
    const styles = useStyles()
    return (
        <section>
            <div>
            <StyledTitle>
                Post
            </StyledTitle>
            <Paper className={styles.bread}>
                <Breadcrumbs>
                    <Typography color="textPrimary" className={styles.link}>
                        {props.history.length > 1
                        ? (
                            <Link color="inherit" href="/" className={styles.link} onClick={event => {
                                event.preventDefault()
                                props.history.goBack()
                            }}>
                                <Back className={styles.icon} />
                                Go Back
                            </Link>
                        )
                        : null
                        } 
                    
                    </Typography>
                    <Typography color="textPrimary" className={styles.link}>
                    <Link color="inherit" href="/" className={styles.link}>
                        <Home className={styles.icon} />
                        Home
                    </Link>
                    </Typography>
                    <Typography color="textPrimary" className={styles.link}>
                    <Link color="inherit" href="/" className={styles.link}>
                        <Category className={styles.icon} />
                        Category
                    </Link>
                    </Typography>
                    <Typography color="textPrimary" className={styles.link}>
                    <Link color="inherit" href="/" className={styles.link}>
                        <PostIcon className={styles.icon} />
                        How to avoid mistakes
                    </Link>
                    </Typography>
                
                </Breadcrumbs>
            </Paper>
            </div>
            <Gutter className="sm" />
            <Gutter className="sm" />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus. Egestas diam in arcu cursus euismod quis viverra nibh cras. Platea dictumst quisque sagittis purus sit amet. Eu consequat ac felis donec et odio. Elementum sagittis vitae et leo duis ut diam quam nulla. Id semper risus in hendrerit gravida rutrum quisque non. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Faucibus ornare suspendisse sed nisi lacus. Platea dictumst quisque sagittis purus sit amet volutpat. Tortor posuere ac ut consequat semper viverra. Facilisi cras fermentum odio eu feugiat pretium. Neque gravida in fermentum et sollicitudin ac. Urna neque viverra justo nec ultrices dui sapien.
                    <Divider className={styles.divider}/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus. Egestas diam in arcu cursus euismod quis viverra nibh cras. Platea dictumst quisque sagittis purus sit amet. Eu consequat ac felis donec et odio. Elementum sagittis vitae et leo duis ut diam quam nulla. Id semper risus in hendrerit gravida rutrum quisque non. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Faucibus ornare suspendisse sed nisi lacus. Platea dictumst quisque sagittis purus sit amet volutpat. Tortor posuere ac ut consequat semper viverra. Facilisi cras fermentum odio eu feugiat pretium. Neque gravida in fermentum et sollicitudin ac. Urna neque viverra justo nec ultrices dui sapien.

                Amet est placerat in egestas erat imperdiet. Sapien faucibus et molestie ac. Et netus et malesuada fames ac turpis. Elementum nisi quis eleifend quam adipiscing. Non sodales neque sodales ut etiam sit amet nisl. Turpis in eu mi bibendum neque. Nibh venenatis cras sed felis eget velit aliquet sagittis. Facilisi nullam vehicula ipsum a arcu cursus. Euismod quis viverra nibh cras pulvinar. Enim nunc faucibus a pellentesque sit amet. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Libero volutpat sed cras ornare. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. A iaculis at erat pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique. Lectus urna duis convallis convallis tellus.

                Augue eget arcu dictum varius duis at consectetur. A erat nam at lectus urna. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Et netus et malesuada fames ac turpis egestas sed. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Proin gravida hendrerit lectus a. Diam maecenas ultricies mi eget mauris pharetra et. Tortor id aliquet lectus proin nibh nisl. Morbi enim nunc faucibus a. Ipsum nunc aliquet bibendum enim. Justo laoreet sit amet cursus sit. Semper eget duis at tellus at urna. Amet tellus cras adipiscing enim eu.

                Nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum sed arcu non odio euismod lacinia at. Purus in mollis nunc sed. Purus in massa tempor nec feugiat nisl pretium fusce id. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Iaculis at erat pellentesque adipiscing commodo elit at. Id aliquet risus feugiat in ante metus. Mi bibendum neque egestas congue quisque egestas diam in. In nulla posuere sollicitudin aliquam ultrices. Ac auctor augue mauris augue. At erat pellentesque adipiscing commodo elit. Lacinia at quis risus sed vulputate. Lacinia at quis risus sed vulputate odio. In hac habitasse platea dictumst vestibulum rhoncus est. Massa tempor nec feugiat nisl pretium fusce. Egestas dui id ornare arcu odio ut.

                Platea dictumst quisque sagittis purus sit amet. Augue mauris augue neque gravida in. Convallis convallis tellus id interdum velit laoreet id donec. Vulputate sapien nec sagittis aliquam malesuada bibendum. Ipsum consequat nisl vel pretium lectus quam id leo in. Venenatis cras sed felis eget velit aliquet sagittis. Amet est placerat in egestas erat. Nunc non blandit massa enim nec dui nunc mattis. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Dictum sit amet justo donec enim diam vulputate ut.
                </CardContent>
                <CardActions>
                    <IconButton color="secondary">
                        <Favorite />
                    </IconButton>
                    <IconButton>
                        <Message />
                    </IconButton>
                    <div className={styles.push}/>
                    
                </CardActions>
            </Card>

            <Gutter size="sm" />
            <Attachments />

            <Gutter size="sm" />
            <MetaData />

            <Gutter size="sm" />
            <Comments />
        </section>
    )
}