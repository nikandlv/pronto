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
                <ListItem button onClick={handleToggle("bluetooth")}>
                    <ListItemIcon>
                        <Message />
                    </ListItemIcon>
                    <ListItemText
                        id="switch-list-label-bluetooth"
                        primary="Approve comments automatically"
                        secondary="approve comments without wating for approval"
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={handleToggle("bluetooth")}
                            checked={checked.indexOf("bluetooth") !== -1}
                            inputProps={{
                                "aria-labelledby": "switch-list-label-bluetooth"
                            }}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Paper>
    );
}
