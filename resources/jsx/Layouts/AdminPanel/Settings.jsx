import React from "react";
import { Tabs, Tab, AppBar, makeStyles } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import General from "./Settings/General";
import Posts from "./Settings/Posts";

const useStyles = makeStyles({
    appbar: {
        borderRadius: "1rem",
        overflow: "hidden"
    }
});

export default function Settings() {
    const styles = useStyles();
    const [tab, setTab] = React.useState(0);
    return (
        <div>
            <AppBar className={styles.appbar} position="static" color="default">
                <Tabs
                    value={tab}
                    onChange={(_, tab) => {
                        setTab(tab);
                    }}
                    aria-label="simple tabs example"
                >
                    <Tab label="General" />
                    <Tab label="Posts" />
                    <Tab label="Comments" />
                    <Tab label="Users" />
                </Tabs>
            </AppBar>
            <SwipeableViews index={tab}>
                <General />
                <Posts />
                <div>Comments</div>
                <div>Users</div>
            </SwipeableViews>
        </div>
    );
}
