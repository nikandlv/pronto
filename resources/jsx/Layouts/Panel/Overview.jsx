import React from "react";
import {
    Grid,
    Paper,
    Box,
    Card,
    IconButton,
    makeStyles,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    ListItemSecondaryAction,
    List
} from "@material-ui/core";
import { Chart } from "react-charts";
import StatsCard from "../../Components/StatsCard";
import ViewIcon from "@material-ui/icons/VisibilityOutlined";
import PeopleIcon from "@material-ui/icons/PeopleOutlineOutlined";
import CommentsIcon from "@material-ui/icons/MessageOutlined";
import PostIcon from "@material-ui/icons/ReceiptOutlined";
import StyledTitle from "../../Components/StyledTitle";
import Pastel from "mui-pastel";
import Reply from "@material-ui/icons/ReplyOutlined";
import StyledButton from "../../Components/StyledButton";

const useStyles = makeStyles({
    wrapper: {
        position: "relative"
    },
    paper: {
        borderRadius: 16,
        overflow: "hidden"
    },
    wrapperTop: {
        width: "100%",
        height: "200px"
    }
});

export default function Overview() {
    const styles = useStyles();
    return (
        <Box m={2}>
            <StyledTitle>Overview</StyledTitle>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <StatsCard
                        primary="4"
                        secondary={"Total posts"}
                        icon={<PostIcon />}
                        color="deepOrange"
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <StatsCard
                        primary="38K"
                        secondary={"Views this week"}
                        icon={<ViewIcon />}
                        color="green"
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <StatsCard
                        primary="104"
                        secondary={"Pending comments"}
                        icon={<CommentsIcon />}
                        color="lightBlue"
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <StatsCard
                        primary="101"
                        secondary={"Total People"}
                        icon={<PeopleIcon />}
                        color="amber"
                    />
                </Grid>
                <Grid item xs={12} md={4} className={styles.wrapper}>
                    <Paper className={styles.paper}>
                        <div className={styles.wrapperTop}>
                            <CustomStyles />
                        </div>
                        <Divider variant="middle" />
                        <ListItem>
                            <ListItemText primary="Abc" />
                            <ListItemAvatar>
                                <Pastel label={<PeopleIcon />} color="amber" />
                            </ListItemAvatar>
                        </ListItem>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} className={styles.wrapper}>
                    <Paper className={styles.paper}>
                        <div className={styles.wrapperTop}>
                            <CustomStyles />
                        </div>
                        <Divider variant="middle" />
                        <ListItem>
                            <ListItemText primary="Abc" />
                            <ListItemAvatar>
                                <Pastel label={<PeopleIcon />} color="amber" />
                            </ListItemAvatar>
                        </ListItem>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} className={styles.wrapper}>
                    <Paper className={styles.paper}>
                        <div className={styles.wrapperTop}>
                            <CustomStyles />
                        </div>
                        <Divider variant="middle" />
                        <ListItem>
                            <ListItemText primary="Abc" />
                            <ListItemAvatar>
                                <Pastel label={<PeopleIcon />} color="amber" />
                            </ListItemAvatar>
                        </ListItem>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className={styles.paper}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Pastel
                                        label={<CommentsIcon />}
                                        color="teal"
                                    />
                                </ListItemAvatar>
                                <ListItemText primary="Latest comments" />
                                <ListItemSecondaryAction>
                                    <StyledButton>View all</StyledButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar src={"/img/user.png"} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="I Think this is a good idea, however i suggest that we look into more stuff before taking further actions"
                                    secondary="Nikan Dalvand - Oct 18 2019"
                                />
                            </ListItem>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar src={"/img/user.png"} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="I Think this is a good idea, however i suggest that we look into more stuff before taking further actions"
                                    secondary="Nikan Dalvand - Oct 18 2019"
                                />
                            </ListItem>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar src={"/img/user.png"} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="I Think this is a good idea, however i suggest that we look into more stuff before taking further actions"
                                    secondary="Nikan Dalvand - Oct 18 2019"
                                />
                            </ListItem>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar src={"/img/user.png"} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="I Think this is a good idea, however i suggest that we look into more stuff before taking further actions"
                                    secondary="Nikan Dalvand - Oct 18 2019"
                                />
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className={styles.paper}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Pastel
                                        label={<PeopleIcon />}
                                        color="pink"
                                    />
                                </ListItemAvatar>
                                <ListItemText primary="Latest users" />
                                <ListItemSecondaryAction>
                                    <StyledButton>View all</StyledButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src="/img/user.png" />
                                </ListItemAvatar>
                                <ListItemText primary="Latest users" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src="/img/user.png" />
                                </ListItemAvatar>
                                <ListItemText primary="Latest users" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src="/img/user.png" />
                                </ListItemAvatar>
                                <ListItemText primary="Latest users" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src="/img/user.png" />
                                </ListItemAvatar>
                                <ListItemText primary="Latest users" />
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

const defs = (
    <defs>
        <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#17EAD9" />
            <stop offset="100%" stopColor="#6078EA" />
        </linearGradient>
        <linearGradient id="1" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#FCE38A" />
            <stop offset="100%" stopColor="#F38181" />
        </linearGradient>
        <linearGradient id="2" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#42E695" />
            <stop offset="100%" stopColor="#3BB2B8" />
        </linearGradient>
        <linearGradient id="3" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#F4Ea0A" />
            <stop offset="100%" stopColor="#df4081" />
        </linearGradient>
    </defs>
);

function CustomStyles() {
    const [{ activeSeriesIndex, activeDatumIndex }, setState] = React.useState({
        activeSeriesIndex: -1,
        activeDatumIndex: -1
    });
    return (
        <MyChart
            elementType="area"
            setState={setState}
            activeDatumIndex={activeDatumIndex}
            activeSeriesIndex={activeSeriesIndex}
        />
    );
}
function MyChart({
    elementType,
    activeDatumIndex,
    activeSeriesIndex,
    setState
}) {
    const data = React.useMemo(
        () => [
            {
                label: "Series 1",
                data: [
                    [0, 1],
                    [1, 2],
                    [2, 4],
                    [3, 2],
                    [4, 7]
                ]
            },
            {
                label: "Series 2",
                data: [
                    [0, 3],
                    [1, 1],
                    [2, 5],
                    [3, 6],
                    [4, 4]
                ]
            }
        ],
        []
    );
    const series = React.useMemo(
        () => ({
            type: elementType
        }),
        [elementType]
    );
    const axes = React.useMemo(
        () => [
            {
                primary: true,
                type: "linear",
                position: "bottom",
                show: false
            },
            {
                type: "linear",
                position: "left",
                stacked: true,
                show: false
            }
        ],
        []
    );
    const getSeriesStyle = React.useCallback(
        series => ({
            color: `url(#${series.index % 4})`,
            opacity:
                activeSeriesIndex > -1
                    ? series.index === activeSeriesIndex
                        ? 1
                        : 0.3
                    : 1
        }),
        [activeSeriesIndex]
    );
    const getDatumStyle = React.useCallback(
        datum => ({
            r:
                activeDatumIndex === datum.index &&
                activeSeriesIndex === datum.seriesIndex
                    ? 7
                    : activeDatumIndex === datum.index
                    ? 5
                    : datum.series.index === activeSeriesIndex
                    ? 3
                    : datum.otherHovered
                    ? 2
                    : 2
        }),
        [activeDatumIndex, activeSeriesIndex]
    );
    const onFocus = React.useCallback(
        focused =>
            setState({
                activeSeriesIndex: focused ? focused.series.id : -1,
                activeDatumIndex: focused ? focused.index : -1
            }),
        [setState]
    );
    return (
        <Chart
            data={data}
            series={series}
            axes={axes}
            getSeriesStyle={getSeriesStyle}
            getDatumStyle={getDatumStyle}
            onFocus={onFocus}
            renderSVG={() => defs}
            tooltip
        />
    );
}
