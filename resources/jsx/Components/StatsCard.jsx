import React from "react";
import {
    Card,
    CardContent,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from "@material-ui/core";

import Person from "@material-ui/icons/PersonOutlineOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    avatar: {
        width: 60,
        height: 60
    },
    avatarIcon: {
        fontSize: 32
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
                        <Avatar className={styles.avatar}>
                            <Person className={styles.avatarIcon} />
                        </Avatar>
                    </ListItemAvatar>
                </ListItem>
            </CardContent>
        </Card>
    );
}
