import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UploadIcon from "@material-ui/icons/CloudUploadOutlined";
import { Box, Grid, Card, CardMedia, CardActions } from "@material-ui/core";
import StyledTitle from "../../../Components/StyledTitle";
import StyledButton from "../../../Components/StyledButton";

const tileData = [
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Breakfast",
        author: "jill111",
        cols: 1,
        featured: true
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Tasty burger",
        author: "director90"
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Camera",
        author: "Danson67"
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Morning",
        author: "fancycrave1",
        featured: true
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Hats",
        author: "Hans"
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Honey",
        author: "fancycravel"
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Vegetables",
        author: "jill111",
        cols: 2
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Water plant",
        author: "BkrmadtyaKarki"
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Mushrooms",
        author: "PublicDomainPictures"
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Olive oil",
        author: "congerdesign"
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Sea star",
        cols: 2,
        author: "821292"
    },
    {
        img:
            "https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "Bike",
        author: "danfador"
    }
];

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden"
    },
    gridList: {
        width: "100%"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    push: {
        flexGrow: 1
    },
    grid: {
        display: "flex",
        alignItems: "center"
    },
    uploadIcon: {
        margin: "0 6px "
    }
}));

export default function MediaPickerDialogGallery() {
    const classes = useStyles();

    return (
        <Box m={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} className={classes.grid}>
                    <StyledTitle gutterBottom className={classes.push}>
                        Media
                    </StyledTitle>
                    <StyledButton size="large">
                        <UploadIcon className={classes.uploadIcon} />
                        Upload
                    </StyledButton>
                </Grid>
                {tileData.map(tile => (
                    <Grid item xs={12} sm={6} md={4} xlg={3}>
                        <Card>
                            <CardMedia
                                className={classes.media}
                                image={tile.img}
                                title="Paella dish"
                            />
                            <CardActions>A good day to smile!</CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
