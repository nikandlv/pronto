import React from "react";
import withDynamic from "../../../Data/withDynamic";
import {
    Dialog,
    Grid,
    Paper,
    DialogContent,
    makeStyles
} from "@material-ui/core";
import MediaPickerDialogGallery from "./MediaPickerDialogGallery";

const useStyles = makeStyles({
    sidebar: {
        display: "flex",
        flexDirection: "row",
        minHeight: "calc(100vh - 96px)",
        maxHeight: "calc(100vh - 96px)"
    },
    content: {
        height: "100%",
        minHeight: "calc(100vh - 96px)",
        maxHeight: "calc(100vh - 96px)"
    }
});

function MediaPickerDialog(props) {
    const state = props.MediaPicker;
    const styles = useStyles();
    return (
        <Dialog open={state.open} fullWidth maxWidth="lg">
            <Grid container>
                <Grid item xs={12} sm={3}>
                    <Paper className={styles.sidebar}>abc</Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <DialogContent className={styles.content}>
                        <MediaPickerDialogGallery />
                    </DialogContent>
                </Grid>
            </Grid>
        </Dialog>
    );
}

export default withDynamic(MediaPickerDialog)
    .injectReducer("MediaPicker")
    .build();
