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
import Explore from "@material-ui/icons/ExploreOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
        borderRadius: 32
    },
    avatar: {
        display: "flex",
        alignItems: "center"
    }
});

export default function StatsCard(props) {
    const styles = useStyles();
    const primary = props.primary || "--";
    const secondary = props.secondary || "--";
    const color = props.color || "amber";
    const icon = props.icon || <Explore />;
    return (
        <Card className={styles.card}>
            <CardContent>
                <ListItem>
                    <ListItemText primary={primary} secondary={secondary} />
                    <ListItemAvatar>
                        <Pastel size="medium" color={color} label={icon} />
                    </ListItemAvatar>
                </ListItem>
            </CardContent>
        </Card>
    );
}
