import React from "react";
import NewCategoryDialog from "./NewCategoryDialog";
import EditCategoryDialog from "./EditCategoryDialog";

export default function Dialogs() {
    return (
        <React.Fragment>
            <NewCategoryDialog />
            <EditCategoryDialog />
        </React.Fragment>
    );
}
