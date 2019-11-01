import React from "react";
import StyledTitle from "../../../Components/StyledTitle";
import StyledTextField from "../../../Components/StyledTextField";
import { Paper, Grid, Card, CardContent, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import BuildIcon from "@material-ui/icons/BuildOutlined";
import LightIcon from "@material-ui/icons/BrightnessLowOutlined";
import LightOutIcon from "@material-ui/icons/Brightness2Outlined";
import { CirclePicker } from "react-color";

const useGeneralStyles = makeStyles({
    container: {
        width: "100%",
        margin: "unset"
    },
    paper: {
        borderRadius: 16
    }
});

export default function General() {
    const styles = useGeneralStyles();
    return (
        <Box p={2}>
            <StyledTitle>General</StyledTitle>
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <Card className={styles.paper}>
                        <CardContent>
                            <StyledTextField fullWidth>
                                Blog title
                            </StyledTextField>
                        </CardContent>
                    </Card>
                    <br />
                    <Card className={styles.paper}>
                        <CardContent>
                            <StyledTextField fullWidth>
                                Base Path
                            </StyledTextField>
                        </CardContent>
                    </Card>
                    <br />
                </Grid>
                <Grid item xs={12} md={6}>
                    <GeneralToggles />
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

function GeneralToggles() {
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
                subheader={<ListSubheader>General</ListSubheader>}
                className={classes.root}
            >
                <ListItem button onClick={handleToggle("bluetooth")}>
                    <ListItemIcon>
                        {checked.indexOf("bluetooth") !== -1 ? (
                            <LightOutIcon />
                        ) : (
                            <LightIcon />
                        )}
                    </ListItemIcon>
                    <ListItemText
                        id="switch-list-label-bluetooth"
                        primary="Automatic night mode"
                        secondary="automatically turn on dark theme after dusk"
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
                <ListItem button onClick={handleToggle("maintenance")}>
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText
                        id="switch-list-label-maintenance"
                        primary="Maintenance mode"
                        secondary="Restrict users from accessing the blog for upgrades"
                    />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={handleToggle("maintenance")}
                            checked={checked.indexOf("maintenance") !== -1}
                            inputProps={{
                                "aria-labelledby": "switch-list-label-wifi"
                            }}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Paper>
    );
}
