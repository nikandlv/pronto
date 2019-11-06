import React from "react";
import { Tabs, Tab, AppBar, makeStyles } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import General from "./Settings/General";
import Comments from "./Settings/Comments";

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
            <Tabs
                value={tab}
                onChange={(_, tab) => {
                    setTab(tab);
                }}
                aria-label="Settings tabs"
            >
                <Tab label="General" />
                <Tab label="Comments" />
            </Tabs>
            <SwipeableViews index={tab}>
                <General />
                <Comments />
            </SwipeableViews>
        </div>
    );
}
