import React from "react";
import {
    CardMedia,
    CardContent,
    makeStyles,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from "@material-ui/core";
import StyledButton from "../../../Components/StyledButton";
import AttachmentIcon from "@material-ui/icons/AttachmentOutlined";
import SdcardIcon from "@material-ui/icons/SdStorageOutlined";
import StraightenIcon from "@material-ui/icons/StraightenOutlined";
import Pastel from "mui-pastel";
const useStyles = makeStyles({
    media: {
        height: 180,
        minHeight: 180,
        width: "100%"
    },
    space: {
        flexGrow: 1
    },
    list: {
        width: "90%"
    },
    listItem: {
        background: "rgba(0,0,0,0.04)",
        borderRadius: 16,
        margin: 4,
        width: "30%",
        display: "inline-flex",
        flexDirection: "column"
    }
});

export default function MediaPickerDialogSidebar() {
    const styles = useStyles();
    return (
        <React.Fragment>
            <CardMedia
                className={styles.media}
                image="https://images.unsplash.com/photo-1573331517719-465fef912842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="Contemplative Reptile"
            />
            <List className={styles.list}>
                <ListItem className={styles.listItem}>
                    <ListItemAvatar>
                        <Pastel label={<AttachmentIcon />} color="amber" />
                    </ListItemAvatar>
                    <ListItemText primary="file.png" />
                </ListItem>
                <ListItem className={styles.listItem}>
                    <ListItemAvatar>
                        <Pastel label={<SdcardIcon />} color="lightBlue" />
                    </ListItemAvatar>
                    <ListItemText primary="5.42MB" />
                </ListItem>
                <ListItem className={styles.listItem}>
                    <ListItemAvatar>
                        <Pastel label={<StraightenIcon />} color="deepPurple" />
                    </ListItemAvatar>
                    <ListItemText primary="178x570" />
                </ListItem>
            </List>
            <div className={styles.space} />
            <CardContent>
                <StyledButton size="large">Select</StyledButton>
            </CardContent>
        </React.Fragment>
    );
}
