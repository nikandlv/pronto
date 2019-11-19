import React from "react";
import {
    CardMedia,
    CardContent,
    makeStyles,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from "@material-ui/core";
import StyledButton from "../../../Components/StyledButton";
const useStyles = makeStyles({
    media: {
        height: 180,
        width: "100%"
    },
    space: {
        flexGrow: 1
    }
});

export default function MediaPickerDialogSidebar() {
    const styles = useStyles();
    return (
        <React.Fragment>
            <CardMedia
                className={styles.media}
                image="https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Contemplative Reptile"
            />
            <div className={styles.space} />
            <CardContent>
                <StyledButton size="large">Select</StyledButton>
            </CardContent>
        </React.Fragment>
    );
}
