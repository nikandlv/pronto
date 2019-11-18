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
    MenuItem
} from "@material-ui/core";

import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { makeStyles } from "@material-ui/styles";
import StyledTitle from "../../Components/StyledTitle";
import Pastel from "mui-pastel";

const useStyles = makeStyles({
    collapseWrapper: {
        borderRadius: 16
    },
    collapseList: {
        padding: 0
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
