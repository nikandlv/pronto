import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UploadIcon from "@material-ui/icons/CloudUploadOutlined";
import { Box, Grid, Card, CardMedia, CardActions } from "@material-ui/core";
import StyledTitle from "../../../Components/StyledTitle";
import StyledButton from "../../../Components/StyledButton";

const tileData = [
    {
        img:
            "https://source.unsplash.com/random",
        title: "Breakfast",
        author: "jill111",
        cols: 1,
        featured: true
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Tasty burger",
        author: "director90"
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Camera",
        author: "Danson67"
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Morning",
        author: "fancycrave1",
        featured: true
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Hats",
        author: "Hans"
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Honey",
        author: "fancycravel"
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Vegetables",
        author: "jill111",
        cols: 2
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Water plant",
        author: "BkrmadtyaKarki"
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Mushrooms",
        author: "PublicDomainPictures"
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Olive oil",
        author: "congerdesign"
    },
    {
        img:
            "https://source.unsplash.com/random",
        title: "Sea star",
        cols: 2,
        author: "821292"
    },
    {
        img:
            "https://source.unsplash.com/random",
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
                {tileData.map((tile,index) => (
                    <Grid item xs={12} sm={6} md={4} xlg={3} key={index}>
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
