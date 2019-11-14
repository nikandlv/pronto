import React from "react";
import {
    Card,
    CardActions,
    IconButton,
    CardHeader,
    Avatar,
    Divider
} from "@material-ui/core";
import Message from "@material-ui/icons/MessageOutlined";
import GithubIcon from "../../Components/Icons/GithubIcon";
import TwitterIcon from "../../Components/Icons/TwitterIcon";
import LinkedInIcon from "../../Components/Icons/LinkedInIcon";
import InstagramIcon from "../../Components/Icons/InstagramIcon";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
        borderRadius: 24,
        marginTop: 16
    },
    actions: {
        display: "flex",
        justifyContent: "center"
    }
});

export default function AuthorWidget() {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardHeader
                avatar={<Avatar src={"/img/user.png"} />}
                title={`Nikan Dalvand`}
                subheader={"Fullstack web developer"}
            />
            <Divider />
            <CardActions className={styles.actions}>
                <IconButton onClick={() => fox.openURL(fox.lang.owner.email)}>
                    <Message />
                </IconButton>
                <IconButton
                    onClick={() => fox.openURL(fox.lang.owner.instagram)}
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton onClick={() => fox.openURL(fox.lang.owner.github)}>
                    <GithubIcon />
                </IconButton>
                <IconButton onClick={() => fox.openURL(fox.lang.owner.twitter)}>
                    <TwitterIcon />
                </IconButton>
                <IconButton
                    onClick={() => fox.openURL(fox.lang.owner.linkedin)}
                >
                    <LinkedInIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
