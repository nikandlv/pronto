import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import CategoryIcon from "@material-ui/icons/CategoryOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import UsersIcon from "@material-ui/icons/PeopleOutlineOutlined";
import MediaIcon from "@material-ui/icons/PermMediaOutlined";
import UploadIcon from "@material-ui/icons/CloudUploadOutlined";
import PostIcon from "@material-ui/icons/ReceiptOutlined";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import WidgetIcon from "@material-ui/icons/WidgetsOutlined";
import { Box } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        position: "relative",
        maxWidth: "100vw"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        zIndex: 1250
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        margin: 16,
        maxHeight: "95%",
        borderRadius: 16,
        borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
        borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
        "&::before": {
            position: "absolute",
            width: "24%",
            height: "100%",
            background: theme.palette.primary.main,
            content: "''"
        }
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        maxWidth: `calc( 100vw - ${drawerWidth + 24}px )`,
        overflowX: "hidden",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "calc( 100vw - 24px )"
        }
    }
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = link => () => {
        props.history.push(link);
    };

    const drawer = (
        <div>
            <List>
                <ListItem button onClick={navigate("/admin")}>
                    <ListItemIcon>
                        <ExploreIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Overview" />
                </ListItem>
                <ListItem button onClick={navigate("/admin/categories")}>
                    <ListItemIcon>
                        <CategoryIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItem>
                <ListItem button onClick={navigate("/admin/posts")}>
                    <ListItemIcon>
                        <PostIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Posts" />
                </ListItem>
                <ListItem button onClick={navigate("/admin/media")}>
                    <ListItemIcon>
                        <MediaIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Media" />
                </ListItem>
                <ListItem button onClick={navigate("/admin/uploads")}>
                    <ListItemIcon>
                        <UploadIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Uploads" />
                </ListItem>
                <ListItem button onClick={navigate("/admin/users")}>
                    <ListItemIcon>
                        <UsersIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>
                <ListItem button onClick={navigate("/admin/widgets")}>
                    <ListItemIcon>
                        <WidgetIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Widgets" />
                </ListItem>
                <ListItem button onClick={navigate("/admin/settings")}>
                    <ListItemIcon>
                        <SettingsIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box m={2}>
            <div className={classes.root}>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={
                                theme.direction === "rtl" ? "right" : "left"
                            }
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>{props.children}</main>
            </div>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    )
};

export default withRouter(ResponsiveDrawer);
