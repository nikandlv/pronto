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

export default function StatsCard() {
    return (
        <Card>
            <CardContent>
                <ListItem>
                    <ListItemText primary="Test" secondary="34K" />
                    <ListItemAvatar>
                        <Avatar>
                            <Person />
                        </Avatar>
                    </ListItemAvatar>
                </ListItem>
            </CardContent>
        </Card>
    );
}
