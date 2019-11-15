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
import {
    Box,
    Avatar,
    Typography,
    Tooltip,
    IconButton
} from "@material-ui/core";
import StyledTitle from "../../Components/StyledTitle";
import Pastel from "mui-pastel";
import Prompt from "mui-prompt";
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
    }
});

const rows = [{}, {}, {}, {}];

function UsersTable(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar/Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="center">Badges</TableCell>
                        <TableCell align="center">Signup date</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                <div className={classes.info}>
                                    <Avatar
                                        src="/img/user.png"
                                        className={classes.avatar}
                                    />
                                    <Typography variant="body2">
                                        John Doe
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Typography>example@example.com</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Pastel label="Verified" />
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="2019-06-01 10:12:51">
                                    <Typography>Oct 26</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="center">
                                <Prompt.Inline continueText="Delete">
                                    <Tooltip title="Delete User ">
                                        <IconButton size="small">
                                            <TrashIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Prompt.Inline>
                                <Tooltip
                                    title="Edit User"
                                    onClick={() =>
                                        props.history.push(
                                            `/admin/users/edit/${1}`
                                        )
                                    }
                                >
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
    );
}

const WrappedUsersTable = withRouter(UsersTable);

export default class Users extends React.Component {
    render() {
        return (
            <Box m={3}>
                <StyledTitle>Users</StyledTitle>
                <WrappedUsersTable />
            </Box>
        );
    }
}
