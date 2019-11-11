import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    title: {
        fontFamily: "'Hammersmith One', sans-serif",
        margin: "24px 0px",
        "&.noMargin": {
            margin: 0
        }
    }
});

export default function StyledTitle(props) {
    const styles = useStyles();
    const noMargin = props.noMargin || false;
    const variant = props.variant || "h3";
    const className = props.className || "";
    return (
        <Typography
            variant={variant}
            className={`${styles.title} ${
                noMargin ? "noMargin" : ""
            } ${className}`}
        >
            {props.children}
        </Typography>
    );
}
