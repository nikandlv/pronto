import React from "react";
import {
    Box,
    Grid,
    Paper,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Collapse,
    List,
    CardContent,
    Divider,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton
} from "@material-ui/core";

import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import AddIcon from "@material-ui/icons/AddOutlined";
import { makeStyles } from "@material-ui/styles";
import StyledTitle from "../../Components/StyledTitle";
import Pastel from "mui-pastel";

const useStyles = makeStyles({
    collapseWrapper: {
        borderRadius: 16
    },
    collapseList: {
        padding: 0
    },
    tagInputWrapper: {
        display: "flex",
        alignItems: "center"
    },
    tagInput: {
        flexGrow: 1
    }
});

export default function NewPost() {
    const styles = useStyles();
    return (
        <Box m={2}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} xlg={3}>
                    <Paper className={styles.collapseWrapper}>
                        <List className={styles.collapseList}>
                            <ListItem button>
                                <ListItemText primary="Categories and tags" />
                                <ListItemSecondaryAction>
                                    <ArrowDownIcon />
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                        <Collapse in={true}>
                            <CardContent>
                                <Divider variant="middle" />
                                <StyledTitle variant="h6">
                                    Categories
                                </StyledTitle>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Categories
                                    </InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={[0, 1]}
                                        onChange={() => {}}
                                        labelWidth={85}
                                        multiple
                                        renderValue={selected => (
                                            <div>
                                                {selected.map(value => (
                                                    <Pastel label={value} />
                                                ))}
                                            </div>
                                        )}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={0}>
                                            <Pastel label="General" />
                                        </MenuItem>
                                        <MenuItem value={1}>
                                            <Pastel label="Test" />
                                        </MenuItem>
                                        <MenuItem value={30}>
                                            <Pastel label="Programming" />
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <br />
                                <br />
                                <Divider variant="middle" />
                                <StyledTitle variant="h6">Tags</StyledTitle>
                                <div className={styles.tagInputWrapper}>
                                    <TextField
                                        variant="outlined"
                                        label="Tag"
                                        className={styles.tagInput}
                                        fullWidth
                                    />
                                    <IconButton color="primary">
                                        <AddIcon />
                                    </IconButton>
                                </div>
                            </CardContent>
                        </Collapse>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} xlg={9}>
                    <Paper>a</Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
