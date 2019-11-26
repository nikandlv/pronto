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
import MediaPickerDialogSidebar from "./MediaPickerDialogSidebar";
import {closeMediapicker} from '../../../Data/Actions/MediaPickerActions'
const useStyles = makeStyles({
    sidebar: {
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 96px)",
        alignItems: "center",
        top: 0,
        position: "sticky"
    },
    content: {
        height: "100%",
        minHeight: "calc(100vh - 96px)"
    }
});

function MediaPickerDialog(props) {
    const {MediaPicker , closeDialog} = props;
    const styles = useStyles();
    return (
        <Dialog open={MediaPicker.open} fullWidth maxWidth="lg" onClose={closeDialog}>
            <Grid container>
                <Grid item xs={12} sm={3}>
                    <Paper className={styles.sidebar}>
                        <MediaPickerDialogSidebar />
                    </Paper>
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
    .injectAction('closeDialog', closeMediapicker)
    .build();
