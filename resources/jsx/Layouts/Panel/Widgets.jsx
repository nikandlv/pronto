import React from "react";
import {
    Box,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    IconButton,
    Menu,
    MenuItem,
    Collapse,
    TextField,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    LinearProgress
} from "@material-ui/core";
import ReorderIcon from "@material-ui/icons/ReorderOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlineOutlined";
import AddIcon from "@material-ui/icons/AddOutlined";
import {
    SortableContainer,
    SortableElement,
    SortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
import { makeStyles } from "@material-ui/styles";
import StyledButton from "../../Components/StyledButton";
import Prompt from "mui-prompt";
import AnimatedWidgetArea from "../AnimatedWidgetArea";
import StyledTitle from "../../Components/StyledTitle";
import { Tabs, Tab } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import MessageIcon from "@material-ui/icons/MessageOutlined";

const DragHandle = SortableHandle(() => (
    <IconButton>
        <ReorderIcon />
    </IconButton>
));

const SortableItem = SortableElement(({ item, open, setOpen }) => {
    let isOpen = open[item.id] === true;
    let title = item.type;
    let description = item.type;
    let config = item.config;
    if (title === "GITHUB_WIDGET") {
        title = "Github activity widget";
        description = "Show contribution history and activities";
    }
    if (title === "TEXT_WIDGET") {
        title = "Text widget";
        description = "Show your awesome and informatic text";
    }
    if (title === "LINK_WIDGET") {
        title = "Links widget";
        description = "A list of internal and external links";
    }

    if (title === "AUTHOR_WIDGET") {
        title = "Author widget";
        description = "Show off information of an author";
    }

    function openDetails() {
        setOpen(item.id, !isOpen);
    }
    return (
        <div>
            <Paper>
                <ListItem button onClick={openDetails}>
                    <ListItemText primary={title} secondary={description} />
                    <ListItemSecondaryAction>
                        <Prompt.Inline continueText="Delete">
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Prompt.Inline>
                        <DragHandle />
                    </ListItemSecondaryAction>
                </ListItem>
                <Collapse in={isOpen}>
                    <CardContent>
                        {item.type === "TEXT_WIDGET" ? (
                            <TextField
                                label="Text"
                                variant="outlined"
                                fullWidth
                                rows={5}
                                multiline
                                value={config.text}
                            />
                        ) : null}
                        {item.type === "GITHUB_WIDGET" ? (
                            <React.Fragment>
                                <TextField
                                    label="Github Username"
                                    variant="outlined"
                                    fullWidth
                                    value={config.username}
                                />
                                <br />
                                <br />
                                <TextField
                                    label="Activity Limit"
                                    variant="outlined"
                                    fullWidth
                                    value={config.limit}
                                />
                            </React.Fragment>
                        ) : null}
                        {item.type === "AUTHOR_WIDGET" ? (
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="author-widget-label">
                                    Author
                                </InputLabel>
                                <Select
                                    labelId="author-widget-label"
                                    id="author-widget"
                                    value={0}
                                    onChange={() => {}}
                                    labelWidth={54}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={0}>Ten</MenuItem>
                                    <MenuItem value={1}>Twenty</MenuItem>
                                    <MenuItem value={2}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        ) : null}
                        {item.type === "LINK_WIDGET" ? (
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MessageIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Contact me" />
                                    <ListItemSecondaryAction>
                                        <Prompt.Inline continueText="Delete">
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Prompt.Inline>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add a new link" />
                                </ListItem>
                            </List>
                        ) : null}
                    </CardContent>
                </Collapse>
            </Paper>
            <br />
        </div>
    );
});

const SortableList = SortableContainer(({ open, setOpen, items, delay }) => {
    return (
        <React.Fragment>
            <Grid container justify="center" spacing={4}>
                <Grid item xs={12} md={5}>
                    <StyledTitle>Widgets</StyledTitle>
                    <List component="ul">
                        {items.map((item, index) => (
                            <SortableItem
                                key={`item-${item.id}`}
                                index={index}
                                item={item}
                                open={open}
                                setOpen={setOpen}
                            />
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledTitle>Preview</StyledTitle>
                    {delay === false ? (
                        <AnimatedWidgetArea widgets={items} />
                    ) : (
                        <LinearProgress color="primary" />
                    )}
                </Grid>
            </Grid>
        </React.Fragment>
    );
});

class SortableComponent extends React.Component {
    state = {
        delay: true
    };
    componentDidMount() {
        window.setTimeout(
            () => [
                this.setState({
                    delay: false
                })
            ],
            1000
        );
    }
    render() {
        const { items, onSortEnd, open, setOpen } = this.props;
        return (
            <SortableList
                useDragHandle
                items={items}
                onSortEnd={onSortEnd}
                open={open}
                setOpen={setOpen}
                delay={this.state.delay}
            />
        );
    }
}

const useStyles = makeStyles({
    "@global": {
        body: {
            listStyleType: "none"
        }
    },
    button: {
        display: "flex",
        justifyContent: "center",
        margin: 16
    }
});

class WidgetManager extends React.Component {
    state = {
        items: [
            {
                id: 1,
                type: "LINK_WIDGET",
                config: {},
                order: 0,
                position: "SIDEBAR"
            },
            {
                id: 2,
                type: "GITHUB_WIDGET",
                config: { username: "nikandlv", limit: -1 },
                order: 0,
                position: "SIDEBAR"
            },
            {
                id: 3,
                type: "TEXT_WIDGET",
                config: { text: "Hello there! welcome to my blog" },
                order: 0,
                position: "SIDEBAR"
            },
            {
                id: 4,
                type: "AUTHOR_WIDGET",
                config: {},
                order: 0,
                position: "SIDEBAR"
            }
        ],
        open: []
    };
    onSortEnd({ oldIndex, newIndex }) {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex)
        }));
    }
    setOpen(key, value) {
        this.setState({
            open: { ...this.state.open, [key]: value }
        });
    }
    render() {
        const { open, items } = this.state;
        return (
            <SortableComponent
                items={items}
                open={open}
                setOpen={this.setOpen.bind(this)}
                onSortEnd={this.onSortEnd.bind(this)}
            />
        );
    }
}

function WidgetGroupManager() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const styles = useStyles();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box m={2}>
            <Grid container justify="center">
                <Grid
                    item
                    xs={11}
                    sm={7}
                    md={6}
                    lg={5}
                    className={styles.button}
                >
                    <StyledButton size="large" onClick={handleClick}>
                        <AddIcon />
                        Add a widget
                    </StyledButton>
                    <Menu
                        id="add-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            Add a link widget
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Add a github widget
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Add a author widget
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Add a text widget
                        </MenuItem>
                    </Menu>
                    <br />
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={12}>
                    <WidgetManager />
                </Grid>
            </Grid>
        </Box>
    );
}

export default function Widgets() {
    const [tab, setTab] = React.useState(0);
    return (
        <div>
            <Tabs
                value={tab}
                onChange={(_, tab) => {
                    setTab(tab);
                }}
                aria-label="Settings tabs"
            >
                <Tab label="Sidebar" />
            </Tabs>
            <SwipeableViews index={tab}>
                <WidgetGroupManager />
                <WidgetGroupManager />
            </SwipeableViews>
        </div>
    );
}
