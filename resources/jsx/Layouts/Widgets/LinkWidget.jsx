import React from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    makeStyles
} from "@material-ui/core";
import HouseIcon from "@material-ui/icons/HouseOutlined";
import CategoryIcon from "@material-ui/icons/CategoryOutlined";
import WorkIcon from "@material-ui/icons/WorkOutlineOutlined";
import SubjectIcon from "@material-ui/icons/SubjectOutlined";
import MessageIcon from "@material-ui/icons/MessageOutlined";
import CollisionLink from "../../Components/CollisionLink";

const useStyles = makeStyles({
    menu: {
        borderRadius: 24,
        overflowX: "hidden",
        marginTop: 16
    }
});

export default function LinkWidget() {
    const classes = useStyles();
    return (
        <Paper className={classes.menu}>
            <List component="nav" aria-labelledby="nested-list-subheader">
                <ListItem button component={CollisionLink} to="/">
                    <ListItemIcon>
                        <HouseIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact me" />
                </ListItem>
                <ListItem button component={CollisionLink} to="/about">
                    <ListItemIcon>
                        <SubjectIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </Paper>
    );
}
