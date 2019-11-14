import React from "react";
import {
    Card,
    CardContent,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from "@material-ui/core";
import Pastel from "mui-pastel";

import Person from "@material-ui/icons/PersonOutlineOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    avatar: {
        display: "flex",
        alignItems: "center"
    }
});

export default function StatsCard() {
    const styles = useStyles();
    return (
        <Card>
            <CardContent>
                <ListItem>
                    <ListItemText primary="Test" secondary="34K" />
                    <ListItemAvatar>
                        <Pastel size="medium" label={<Person />} />
                    </ListItemAvatar>
                </ListItem>
            </CardContent>
        </Card>
    );
}
