import React from "react";
import {
    Box,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Menu,
    MenuItem,
    Collapse,
    TextField,
    CardContent
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
const DragHandle = SortableHandle(() => (
    <IconButton>
        <ReorderIcon />
    </IconButton>
));

const SortableItem = SortableElement(({ item, open, setOpen }) => {
    let isOpen = open[item.id] === true;
    let title = item.type;
    let description = item.type;
    if (title === "GITHUB_WIDGET") {
        title = "Github activity widget";
        description = "Show contribution history and activities";
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
                            />
                        ) : null}
                        {item.type === "GITHUB_WIDGET" ? (
                            <React.Fragment>
                                <TextField
                                    label="Github Username"
                                    variant="outlined"
                                    fullWidth
                                />
                                <br />
                                <br />
                                <TextField
                                    label="Activity Limit"
                                    variant="outlined"
                                    fullWidth
                                />
                            </React.Fragment>
                        ) : null}
                    </CardContent>
                </Collapse>
            </Paper>
            <br />
        </div>
    );
});

const SortableList = SortableContainer(({ open, setOpen, items }) => {
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
                    <AnimatedWidgetArea widgets={items} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
});

class SortableComponent extends React.Component {
    render() {
        const { items, onSortEnd, open, setOpen } = this.props;
        return (
            <SortableList
                useDragHandle
                items={items}
                onSortEnd={onSortEnd}
                open={open}
                setOpen={setOpen}
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
                config: {},
                order: 0,
                position: "SIDEBAR"
            },
            {
                id: 3,
                type: "TEXT_WIDGET",
                config: {},
                order: 0,
                position: "SIDEBAR"
            },
            {
                id: 4,
                type: "AUTHORS_WIDGET",
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
