import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/PhotoOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import propTypes from "prop-types";
const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        display: "inline-flex",
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    image: {
        width: "100%",
        height: "auto"
    },
    overlay: {
        opacity: 0,
        transition: "500ms opacity ease-out",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(255,255,255,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            opacity: 1
        }
    },
    button: {
        backgroundColor: "rgba(0,0,0,0.5)",
        transition: "200ms background-color",
        "&:hover,&:active,&:focus": {
            backgroundColor: "rgba(0,0,0,1)"
        }
    }
});

export default function ImagePicker(props) {
    const image = props.image || "/img/placeholder.jpg";
    const styles = useStyles();
    return (
        <div className={styles.wrapper}>
            <img src={image} className={styles.image} />
            <div className={styles.overlay}>
                <IconButton className={styles.button}>
                    <PhotoIcon />
                </IconButton>
                <IconButton className={styles.button}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
}

ImagePicker.propTypes = {
    image: propTypes.string
};
