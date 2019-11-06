import React from "react";
import StyledTitle from "../../../Components/StyledTitle";
import StyledTextField from "../../../Components/StyledTextField";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        width: "100%",
        margin: "unset"
    }
});

export default function General() {
    const styles = useStyles();
    return (
        <div>
            <StyledTitle>General</StyledTitle>
            <Grid container spacing={2} className={styles.container}>
                <Grid xs={12} sm={6} md={4} item>
                    <StyledTextField fullWidth>Blog title</StyledTextField>
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <StyledTextField fullWidth>Test</StyledTextField>
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <StyledTextField fullWidth>Test</StyledTextField>
                </Grid>
            </Grid>
        </div>
    );
}
