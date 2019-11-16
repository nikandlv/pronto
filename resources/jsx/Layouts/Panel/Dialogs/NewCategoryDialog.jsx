import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import withDynamic from "../../../Data/withDynamic";
import { closeNewCategoryDialog } from "../../../Data/Actions/CategoryDialogActions";

function NewCategoryDialog(props) {
    const state = props.NewCategory || { open: false };
    const closeDialog = props.closeDialog;
    return (
        <Dialog maxWidth="xs" fullWidth open={state.open} onClose={closeDialog}>
            <DialogContent></DialogContent>
        </Dialog>
    );
}

export default withDynamic(NewCategoryDialog)
    .injectReducer("NewCategory")
    .injectAction("closeDialog", closeNewCategoryDialog)
    .build();
