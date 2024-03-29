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
import Topbar from "../Blog/Topbar";
import clsx from "clsx";
import Store from "../../Data/Store";
import NewCategoryReducer from "../../Data/Reducers/NewCategoryReducer";
import Dialogs from "./Dialogs/Dialogs";
import EditCategoryReducer from "../../Data/Reducers/EditCategoryReducer";
import MediaPickerReducer from "../../Data/Reducers/MediaPickerReducer";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
Store.injectReducer("NewCategory", NewCategoryReducer);
Store.injectReducer("EditCategory", EditCategoryReducer);
Store.injectReducer("MediaPicker", MediaPickerReducer);

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            overflowX: "hidden"
        }
    },
    root: {
        display: "flex",
        position: "relative",
        maxWidth: "100vw"
    },
    drawer: {},
    appBar: {
        zIndex: 1250,
        margin: theme.spacing(2),
        width: `calc(100% - ${theme.spacing(4)}px)`,
        boxSizing: "border-box",
        top: 0,
        left: 0
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        margin: 16,
        maxHeight: "95%",
        paddingTop: 64,
        borderRadius: 24,
        borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
        borderBottom: "2px solid rgba(0, 0, 0, 0.12)"
    },
    content: {
        flexGrow: 1,
        paddingTop: 64
    },
    menu: {
        width: "95%",
        margin: "0 auto",
        borderRadius: "3rem"
    },
    activeMenu: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        "& svg": {
            color: "white"
        },
        "&:hover,&:active,&:focus": {
            background: "linear-gradient(45deg, #FE6B8B 50%, #FF8E53 80%)"
        }
    },
    icon: {},
    text: {
        fontWeight: "500"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        overflowX: "hidden"
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(8),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(8)
        },
        "&:hover": {
            width: drawerWidth
        }
    }
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [expanded, setExpanded] = React.useState(true);

    const currentPath = window.location.pathname;

    const handleExpandToggle = () => {
        setExpanded(!expanded);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = link => () => {
        props.history.push(link);
    };

    const drawerItems = {
        "/admin": {
            label: "Overview",
            icon: ExploreIcon,
            onClick: navigate("/admin")
        },
        "/admin/categories": {
            label: "Categories",
            icon: CategoryIcon,
            onClick: navigate("/admin/categories")
        },
        "/admin/posts": {
            label: "Posts",
            icon: PostIcon,
            onClick: navigate("/admin/posts")
        },
        "/admin/media": {
            label: "Media",
            icon: MediaIcon,
            onClick: navigate("/admin/media")
        },
        "/admin/uploads": {
            label: "Uploads",
            icon: UploadIcon,
            onClick: navigate("/admin/uploads")
        },
        "/admin/users": {
            label: "Users",
            icon: UsersIcon,
            onClick: navigate("/admin/users")
        },
        "/admin/widgets": {
            label: "Widgets",
            icon: WidgetIcon,
            onClick: navigate("/admin/widgets")
        },
        "/admin/settings": {
            label: "Settings",
            icon: SettingsIcon,
            onClick: navigate("/admin/settings")
        }
    };

    const drawer = (
        <div>
            <List>
                {Object.keys(drawerItems).map(path => {
                    let item = drawerItems[path];
                    return (
                        <ListItem
                            key={path}
                            button
                            onClick={item.onClick}
                            className={`${classes.menu} ${
                                currentPath === path ? classes.activeMenu : ""
                            }`}
                        >
                            <ListItemIcon>
                                <item.icon />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.text
                                }}
                                primary={item.label}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    return (
        <Box m={2}>
            <Dialogs />
            <div className={classes.root}>
                <Topbar
                    hasMenu
                    hasExpand
                    expanded={expanded}
                    className={classes.appBar}
                    position="fixed"
                    onMenuClick={handleDrawerToggle}
                    onExpandClick={handleExpandToggle}
                />
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
                            className={clsx({
                                [classes.drawerOpen]: expanded,
                                [classes.drawerClose]: !expanded
                            })}
                            classes={{
                                paper: clsx(classes.drawerPaper, {
                                    [classes.drawerOpen]: expanded,
                                    [classes.drawerClose]: !expanded
                                })
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
