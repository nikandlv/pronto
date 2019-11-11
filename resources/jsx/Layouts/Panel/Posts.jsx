import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TrashIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import CommentsIcon from "@material-ui/icons/MessageOutlined";
import ViewIcon from "@material-ui/icons/VisibilityOutlined";
import {
    Box,
    Avatar,
    Typography,
    Tooltip,
    IconButton,
    Grid
} from "@material-ui/core";
import StyledTitle from "../../Components/StyledTitle";
import AddIcon from "@material-ui/icons/AddOutlined";

import Pastel from "mui-pastel";
import Prompt from "mui-prompt";
import StyledButton from "../../Components/StyledButton";
const useStyles = makeStyles({
    root: {
        width: "100%",
        overflowX: "auto",
        borderRadius: 16
    },
    table: {},
    info: {
        display: "flex",
        alignItems: "center"
    },
    avatar: {
        margin: "0px 4px"
    },
    push: {
        flexGrow: 1
    },
    grid: {
        display: "flex",
        alignItems: "center"
    },
    addIcon: {
        margin: "0 6px "
    }
});

const rows = [{}, {}, {}, {}];

function UsersTable(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={12} className={classes.grid}>
                <StyledTitle gutterBottom className={classes.push}>
                    Posts
                </StyledTitle>
                <StyledButton size="large">
                    <AddIcon className={classes.addIcon} />
                    New Post
                </StyledButton>
            </Grid>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Post title</TableCell>
                            <TableCell align="center">Badges</TableCell>
                            <TableCell align="center">Creation date</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    Hello world!
                                </TableCell>
                                <TableCell align="center">
                                    <Pastel color="green" label="Published" />
                                    <Pastel label="24 Likes" color="red" />
                                    <Pastel label="24 Comments" color="blue" />
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title="2019-06-01 10:12:51">
                                        <Typography>Oct 26</Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Prompt.Inline continueText="Delete">
                                        <Tooltip title="Delete User">
                                            <IconButton size="small">
                                                <TrashIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Prompt.Inline>
                                    <Tooltip title="Comments">
                                        <IconButton size="small">
                                            <CommentsIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit post">
                                        <IconButton size="small">
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="View post">
                                        <IconButton size="small">
                                            <ViewIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </React.Fragment>
    );
}

const WrappedUsersTable = withRouter(UsersTable);

export default class Posts extends React.Component {
    render() {
        return (
            <Box m={3}>
                <WrappedUsersTable />
            </Box>
        );
    }
}
