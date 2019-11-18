import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";

export default function NewPost() {
    return (
        <Box m={2}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper>a</Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper>a</Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
