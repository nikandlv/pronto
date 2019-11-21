import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/PhotoOutlined";
import propTypes from "prop-types";
const useStyles = makeStyles({
    wrapper: {
        height: "auto",
        width: "100%",
        position: "relative"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    overlay: {
        opacity: 0,
        transition: "500ms opacity ease-in-ease-out"
    }
});

export default function ImagePicker(props) {
    const image = props.image || "/img/placeholder.jpg";
    const styles = useStyles();
    return (
        <div className={styles.wrapper}>
            <img src={image} className={styles.image} />
            <div className={styles.overlay}>
                <IconButton>
                    <PhotoIcon />
                </IconButton>
            </div>
        </div>
    );
}

ImagePicker.propTypes = {
    image: propTypes.string
};
