import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
        borderRadius: 24,
        marginTop: 16,
        padding: 16
    }
});

export default function AuthorWidget(props) {
    const styles = useStyles();
    const config = props.config || { text: "Nothing to show here!" };
    return (
        <Paper className={styles.card}>
            <Typography>{config.text}</Typography>
        </Paper>
    );
}
