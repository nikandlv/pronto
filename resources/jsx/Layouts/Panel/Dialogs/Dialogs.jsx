import React from "react";
import NewCategoryDialog from "./NewCategoryDialog";
import EditCategoryDialog from "./EditCategoryDialog";
import MediaPickerDialog from "./MediaPickerDialog";

export default function Dialogs() {
    return (
        <React.Fragment>
            <NewCategoryDialog />
            <EditCategoryDialog />
            <MediaPickerDialog />
        </React.Fragment>
    );
}
