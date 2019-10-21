import React from 'react'
import { Paper, List, ListItem, ListItemText, Collapse, IconButton, Avatar, ListItemAvatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ArrowDown from '@material-ui/icons/ExpandMoreOutlined'
import ArrowUp from '@material-ui/icons/ExpandLessOutlined'
import GithubIcon from './Icons/GithubIcon'
import 'react-github-contribution-calendar/default.css'
import Calendar from 'react-github-contribution-calendar';
var panelColors = ['#EEEEEE', '#D6E685', '#8CC665', '#44A340', '#1E6823'];

var values = {};
var pad = (v) => (v < 10 ? '0' + v : v)
for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 31; j++) {
    values['2016-' + pad(i) + '-' + pad(j)] = Math.floor(Math.random() * 5);
    }
}
    var until = '2016-12-31';

const useStyles = makeStyles({
    paper: {
        borderRadius: 16,
        marginTop: 16,
        padding: 0
    },
    expand: {
        justifyContent: 'center'
    },
    list: {
        padding: 0,
        borderRadius: 16
    }
})

export default function GithubWidget() {
    const styles = useStyles()
    const [expand,setExpand] = React.useState()
    return (
        <Paper className={styles.paper}>
            <ListItem>
            <IconButton>
            <GithubIcon />
            </IconButton>
                    <ListItemText primary="Github activity" />
                </ListItem>

                <Calendar panelColors={panelColors} values={values} until={until} />
            <List className={styles.list}>
            <Collapse in={expand} collapsedHeight='160px'>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={'/img/user.png'} />
                    </ListItemAvatar>
                    <ListItemText primary="Pushed" secondary="Did some magic trick" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={'/img/user.png'} />
                    </ListItemAvatar>
                    <ListItemText primary="Pushed" secondary="Did some magic trick" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={'/img/user.png'} />
                    </ListItemAvatar>
                    <ListItemText primary="Pushed" secondary="Did some magic trick" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={'/img/user.png'} />
                    </ListItemAvatar>
                    <ListItemText primary="Pushed" secondary="Did some magic trick" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={'/img/user.png'} />
                    </ListItemAvatar>
                    <ListItemText primary="Pushed" secondary="Did some magic trick" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={'/img/user.png'} />
                    </ListItemAvatar>
                    <ListItemText primary="Pushed" secondary="Did some magic trick" />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={'/img/user.png'} />
                    </ListItemAvatar>
                    <ListItemText primary="Pushed" secondary="Did some magic trick" />
                </ListItem>
            </Collapse>
            <ListItem className={styles.expand} button onClick={() => {
                setExpand(!expand)
            }}>
                    {
                        expand
                        ? <ArrowUp />
                        : <ArrowDown />
                    }
            </ListItem>
            </List>
        </Paper>
    )
}