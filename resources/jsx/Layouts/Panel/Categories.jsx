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
import withDynamic from "../../Data/withDynamic";
import { openNewCategoryDialog } from "../../Data/Actions/CategoryDialogActions";
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
    const openDialog = props.openDialog;
    return (
        <React.Fragment>
            <Grid item xs={12} className={classes.grid}>
                <StyledTitle gutterBottom className={classes.push}>
                    Categories
                </StyledTitle>
                <StyledButton size="large" onClick={openDialog}>
                    <AddIcon className={classes.addIcon} />
                    New category
                </StyledButton>
            </Grid>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="center">Parent</TableCell>
                            <TableCell align="center">Posts</TableCell>
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
                                    <Pastel color="green" label="General" />
                                </TableCell>
                                <TableCell align="center">
                                    <Pastel label="24" color="red" />
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title="2019-06-01 10:12:51">
                                        <Typography>Oct 26</Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Prompt.Inline continueText="Delete">
                                        <Tooltip title="Delete post">
                                            <IconButton size="small">
                                                <TrashIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Prompt.Inline>
                                    <Tooltip title="Edit post">
                                        <IconButton size="small">
                                            <EditIcon />
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

const WrappedUsersTable = withDynamic(withRouter(UsersTable))
    .injectAction("openDialog", openNewCategoryDialog)
    .build();

export default class Categories extends React.Component {
    render() {
        return (
            <Box m={3}>
                <WrappedUsersTable />
            </Box>
        );
    }
}
