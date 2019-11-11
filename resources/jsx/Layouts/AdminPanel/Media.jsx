import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Box, Paper } from "@material-ui/core";
import StyledTitle from "../../Components/StyledTitle";

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
    }
}));

export default function Media() {
    const classes = useStyles();

    return (
        <Box m={3}>
            <StyledTitle gutterBottom>Media</StyledTitle>
            <Paper>
                <div className={classes.root}>
                    <GridList
                        cellHeight={300}
                        className={classes.gridList}
                        cols={4}
                    >
                        <GridListTile
                            key="Subheader"
                            cols={4}
                            style={{ height: "auto" }}
                        >
                            <ListSubheader component="div">
                                December
                            </ListSubheader>
                        </GridListTile>
                        {tileData.map(tile => (
                            <GridListTile key={tile.img} cols={1}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>by: {tile.author}</span>}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${tile.title}`}
                                            className={classes.icon}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Paper>
        </Box>
    );
}