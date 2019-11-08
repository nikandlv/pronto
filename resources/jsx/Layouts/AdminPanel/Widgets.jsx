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
import {
    SortableContainer,
    SortableElement,
    SortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
import { makeStyles } from "@material-ui/styles";
import StyledButton from "../../Components/StyledButton";
const DragHandle = SortableHandle(() => (
    <IconButton>
        <ReorderIcon />
    </IconButton>
));

const SortableItem = SortableElement(({ value }) => (
    <div>
        <Paper>
            <ListItem>
                <ListItemText
                    primary={value}
                    secondary="Add your internal/external links"
                />
                <ListItemSecondaryAction>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <DragHandle />
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
        <br />
    </div>
));

const SortableList = SortableContainer(({ items }) => {
    return (
        <List component="ul">
            {items.map((value, index) => (
                <SortableItem
                    key={`item-${value}`}
                    index={index}
                    value={value}
                />
            ))}
        </List>
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

export default function Widgets() {
    const styles = useStyles();
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
                    <StyledButton size="large">Add a widget</StyledButton>
                    <br />
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={11} sm={7} md={6} lg={5}>
                    <SortableComponent />
                </Grid>
            </Grid>
        </Box>
    );
}
