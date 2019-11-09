import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        borderRadius: "2rem",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    }
});

export default function StyledButton(props) {
    const styles = useStyles();
    const className = props.className || "";
    return (
        <Button
            color="primary"
            size="small"
            variant="contained"
            className={`${styles.button} ${className}`}
            {...props}
        >
            {props.children}
        </Button>
    );
}
