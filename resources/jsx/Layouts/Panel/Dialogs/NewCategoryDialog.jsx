import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import withDynamic from "../../../Data/withDynamic";
import { closeNewCategoryDialog } from "../../../Data/Actions/CategoryDialogActions";

function NewCategoryDialog(props) {
    const state = props.NewDialog || { open: false };
    const close = props.close;
    return (
        <Dialog maxWidth="xs" fullWidth open={state.open} onClose={close}>
            <DialogContent></DialogContent>
        </Dialog>
    );
}

export default withDynamic(NewCategoryDialog)
    .injectReducer("NewCategory")
    .injectAction("close", closeNewCategoryDialog)
    .build();
