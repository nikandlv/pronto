import React from "react";
import { Card, CardContent, ListItem, ListItemText } from "@material-ui/core";

export default function() {
    return (
        <Card>
            <CardContent>
                <ListItem>
                    <ListItemText primary="Test" secondary="34K" />
                </ListItem>
            </CardContent>
        </Card>
    );
}
