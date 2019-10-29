import React from "react";
import StyledTitle from "../../../Components/StyledTitle";
import StyledTextField from "../../../Components/StyledTextField";
import { Paper, Grid } from "@material-ui/core";

export default function General() {
    return (
        <div>
            <StyledTitle>General</StyledTitle>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6} md={4} item>
                    <StyledTextField fullWidth>Test</StyledTextField>
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
