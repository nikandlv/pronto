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
    MenuItem
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

const DragHandle = SortableHandle(() => (
    <IconButton>
        <ReorderIcon />
    </IconButton>
));

const SortableItem = SortableElement(({ value }) => (
    <div>
        <Paper>
            <ListItem button>
                <ListItemText
                    primary={value}
                    secondary="Add your internal/external links"
                />
                <ListItemSecondaryAction>
                    <Prompt.Inline continueText="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Prompt.Inline>
                    <DragHandle />
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
        <br />
    </div>
));

const SortableList = SortableContainer(({ open, setOpen, items }) => {
    return (
        <List component="ul">
            {items.map((value, index) => (
                <SortableItem
                    key={`item-${value}`}
                    index={index}
                    value={value}
                    open={open}
                    setOpen={setOpen}
                />
            ))}
        </List>
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
        items: ["Item 1", "Item 2", "Item 3"],
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

export default function Widgets() {
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
                <Grid item xs={11} sm={7} md={6} lg={5}>
                    <WidgetManager />
                </Grid>
            </Grid>
        </Box>
    );
}
