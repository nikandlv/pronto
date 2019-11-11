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
import DownloadIcon from "@material-ui/icons/CloudDownloadOutlined";
import {
    Box,
    Avatar,
    Typography,
    Tooltip,
    IconButton,
    Grid
} from "@material-ui/core";
import StyledTitle from "../../Components/StyledTitle";
import UploadIcon from "@material-ui/icons/CloudUploadOutlined";

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
    uploadIcon: {
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
                    Uploads
                </StyledTitle>
                <StyledButton size="large">
                    <UploadIcon className={classes.uploadIcon} />
                    Upload
                </StyledButton>
            </Grid>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>File name</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell align="center">Downloads</TableCell>
                            <TableCell align="center">Upload date</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    file.txt
                                </TableCell>
                                <TableCell>
                                    <Typography>7.2MB</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Pastel label="24" color="amber" />
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
                                    <Tooltip title="Download">
                                        <IconButton size="small">
                                            <DownloadIcon />
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

export default class Uploads extends React.Component {
    render() {
        return (
            <Box m={3}>
                <WrappedUsersTable />
            </Box>
        );
    }
}
