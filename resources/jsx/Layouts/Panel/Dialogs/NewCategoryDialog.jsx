import React from "react";
import {
    Dialog,
    DialogContent,
    TextField,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    DialogActions,
    makeStyles
} from "@material-ui/core";
import withDynamic from "../../../Data/withDynamic";
import { closeNewCategoryDialog } from "../../../Data/Actions/CategoryDialogActions";
import StyledTitle from "../../../Components/StyledTitle";
import Pastel from "mui-pastel";
import StyledButton from "../../../Components/StyledButton";

const useStyles = makeStyles({
    push: {
        flexGrow: 1
    }
});

function NewCategoryDialog(props) {
    const styles = useStyles();
    const state = props.NewCategory || { open: false };
    const closeDialog = props.closeDialog;
    return (
        <Dialog maxWidth="xs" fullWidth open={state.open} onClose={closeDialog}>
            <DialogContent>
                <StyledTitle>New Category</StyledTitle>
                <TextField variant="outlined" label="Title" fullWidth />
                <br />
                <br />
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">
                        Parent Category
                    </InputLabel>
                    <Select
                        fullWidth
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={0}
                        onChange={() => {}}
                        labelWidth={120}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>
                            <Pastel label="General" />
                        </MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <br />
            </DialogContent>
            <DialogActions>
                <StyledButton size="medium" variant="text">
                    Cancel
                </StyledButton>
                <div className={styles.push} />
                <StyledButton size="medium">Create</StyledButton>
            </DialogActions>
        </Dialog>
    );
}

export default withDynamic(NewCategoryDialog)
    .injectReducer("NewCategory")
    .injectAction("closeDialog", closeNewCategoryDialog)
    .build();
