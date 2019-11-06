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

export default function Widgets() {
    return (
        <Box m={2}>
            <Grid container justify="center">
                <Grid item xs={11} sm={7} md={6} lg={5}>
                    <Paper>
                        <List>
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
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
