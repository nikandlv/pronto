import React from "react";
import {
    Box,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from "@material-ui/core";
import ReorderIcon from "@material-ui/icons/ReorderOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem
                    key={`item-${value}`}
                    index={index}
                    value={value}
                />
            ))}
        </ul>
    );
});

class SortableComponent extends React.Component {
    state = {
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex)
        }));
    };
    render() {
        return (
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        );
    }
}

export default function Widgets() {
    return (
        <Box m={2}>
            <Grid container justify="center">
                <Grid item xs={11} sm={7} md={6} lg={5}>
                    <List>
                        <SortableComponent />
                        <Paper>
                            <ListItem>
                                <ListItemText
                                    primary="Links"
                                    secondary="Add your internal/external links"
                                />
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton>
                                        <ReorderIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Paper>
                        <br />
                        <Paper>
                            <ListItem>
                                <ListItemText
                                    primary="Links 2"
                                    secondary="Add your internal/external links"
                                />
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton>
                                        <ReorderIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Paper>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}
