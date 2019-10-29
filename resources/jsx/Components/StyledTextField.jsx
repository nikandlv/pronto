import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({});

export default function StyledTextField(props) {
    const styles = useStyles();
    const variant = props.variant || "outlined";
    return <TextField variant={variant}>{props.children}</TextField>;
}
