import React from "react";
import StyledTitle from "../../../Components/StyledTitle";
import StyledTextField from "../../../Components/StyledTextField";
import { Paper, Grid, Card, CardContent, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import Message from "@material-ui/icons/MessageOutlined";
import HowToRegOutlined from "@material-ui/icons/HowToRegOutlined";
import Trash from "@material-ui/icons/DeleteOutlineOutlined";

const useCommentsStyles = makeStyles({
    container: {
        width: "100%",
        margin: "unset"
    },
    paper: {
        borderRadius: 16
    }
});

export default function Comments() {
    const styles = useCommentsStyles();
    return (
        <Box p={2}>
            <StyledTitle>Comments</StyledTitle>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Card className={styles.paper}>
                        <CardContent>
                            <StyledTextField fullWidth multiline rows={4}>
                                Offensive words
                            </StyledTextField>
                        </CardContent>
                    </Card>
                    <br />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CommentsToggles />
                </Grid>
            </Grid>
            <br />
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    root: {},
    paper: {
        borderRadius: 16,
        width: "94%",
        margin: "0px 3%"
    }
}));

function CommentsToggles() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(["wifi"]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Paper className={classes.paper}>
            <List
                subheader={<ListSubheader>Comments</ListSubheader>}
                className={classes.root}
            >
                <ListItem button onClick={handleToggle("approve")}>
                    <ListItemIcon>
                        <Message />
                    </ListItemIcon>
                    <ListItemText
                        id="switch-list-label-approve"
                        primary="Approve comments automatically"
                        secondary="approve comments without wating for approval"
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={handleToggle("approve")}
                            checked={checked.indexOf("approve") !== -1}
                            inputProps={{
                                "aria-labelledby": "switch-list-label-approve"
                            }}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button onClick={handleToggle("anonymous")}>
                    <ListItemIcon>
                        <HowToRegOutlined />
                    </ListItemIcon>
                    <ListItemText
                        id="switch-list-label-anonymous"
                        primary="Allow anonymous comments"
                        secondary="Allow viewer to comment without signing in"
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={handleToggle("anonymous")}
                            checked={checked.indexOf("anonymous") !== -1}
                            inputProps={{
                                "aria-labelledby": "switch-list-label-anonymous"
                            }}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button onClick={handleToggle("delete")}>
                    <ListItemIcon>
                        <Trash />
                    </ListItemIcon>
                    <ListItemText
                        id="switch-list-label-delete"
                        primary="Allow comment delete"
                        secondary="Allow viewer to delete their comment"
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={handleToggle("delete")}
                            checked={checked.indexOf("delete") !== -1}
                            inputProps={{
                                "aria-labelledby": "switch-list-label-delete"
                            }}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Paper>
    );
}
