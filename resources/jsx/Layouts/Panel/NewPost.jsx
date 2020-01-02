import React from "react";
import {
    Box,
    Grid,
    Paper,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Collapse,
    List,
    CardContent,
    Divider,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton,
    Checkbox,
    Card,
    Tabs,
    Tab,
    withTheme,
    CardMedia
} from "@material-ui/core";

import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import AddIcon from "@material-ui/icons/AddOutlined";
import { makeStyles } from "@material-ui/styles";
import StyledTitle from "../../Components/StyledTitle";
import StyledButton from "../../Components/StyledButton";
import Pastel from "mui-pastel";
import FroalaEditorComponent from "react-froala-wysiwyg";
import Froalaeditor from "froala-editor";
import "froala-editor/js/plugins.pkgd.min.js";
import Store from "../../Data/Store";
import { openMediapicker } from "../../Data/Actions/MediaPickerActions";
import { DateTimePicker } from "@material-ui/pickers";
import ImagePicker from "../../Components/ImagePicker";
const useStyles = makeStyles({
    card: {
        borderRadius: 16,
        overflow: "visible"
    },
    collapseList: {
        padding: 0
    },
    tagInputWrapper: {
        display: "flex",
        alignItems: "center"
    },
    collapseListTitle: {
        borderRadius: 16
    },
    tagInput: {
        flexGrow: 1
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

Froalaeditor.DefineIcon("selectMedia", {
    NAME: "Select media",
    SVG_KEY: "insertImage"
});
Froalaeditor.RegisterCommand("selectMedia", {
    title: "Select Media",
    focus: false,
    undo: true,
    refreshAfterCallback: true,
    callback: function() {
        Store.dispatch(openMediapicker());
    }
});

const toolbarButtons = [
    "fullscreen",
    "bold",
    "italic",
    "underline",
    "strikeThrough",
    "subscript",
    "superscript",
    "|",
    "fontSize",
    "color",
    "inlineStyle",
    "paragraphStyle",
    "|",
    "paragraphFormat",
    "align",
    "formatOL",
    "formatUL",
    "outdent",
    "indent",
    "quote",
    "-",
    "selectMedia",
    "insertTable",
    "emoticons",
    "specialCharacters",
    "insertHR",
    "selectAll",
    "clearFormatting",
    "|",
    "print",
    "help",
    "html",
    "|",
    "undo",
    "redo"
];

function NewPost(props) {
    const styles = useStyles();
    const theme = props.theme;
    const key = theme.palette.type === "dark" ? "darkmode" : "";
    const [openCategories, setOpenCategories] = React.useState(true);
    const [openOptions, setOpenOptions] = React.useState(false);
    const [openVisibility, setOpenVisibility] = React.useState(false);
    const [model, setModel] = React.useState("");

    function closeAll() {
        setOpenCategories(false);
        setOpenOptions(false);
        setOpenVisibility(false);
    }

    function toggleCategories() {
        closeAll();
        setOpenCategories(!openCategories);
    }

    function toggleOptions() {
        closeAll();
        setOpenOptions(!openOptions);
    }

    function toggleVisibility() {
        closeAll();
        setOpenVisibility(!openVisibility);
    }

    return (
        <Box m={2}>
            <Grid item xs={12} className={styles.grid}>
                <StyledTitle gutterBottom className={styles.push}>
                    New Post
                </StyledTitle>
                <StyledButton size="large">Save</StyledButton>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} xlg={3}>
                    <Paper className={styles.card}>
                        <List className={styles.collapseList}>
                            <ListItem
                                button
                                className={styles.collapseListTitle}
                                onClick={toggleCategories}
                            >
                                <ListItemText primary="Categories and tags" />
                                <ListItemSecondaryAction>
                                    <ArrowDownIcon />
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                        <Collapse in={openCategories}>
                            <CardContent>
                                <Divider variant="middle" />
                                <StyledTitle variant="h6">
                                    Categories
                                </StyledTitle>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Categories
                                    </InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={[0, 1]}
                                        onChange={() => {}}
                                        labelWidth={85}
                                        multiple
                                        renderValue={selected => (
                                            <div>
                                                {selected.map(value => (
                                                    <Pastel label={value} />
                                                ))}
                                            </div>
                                        )}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={0}>
                                            <Pastel label="General" />
                                        </MenuItem>
                                        <MenuItem value={1}>
                                            <Pastel label="Test" />
                                        </MenuItem>
                                        <MenuItem value={30}>
                                            <Pastel label="Programming" />
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <br />
                                <br />
                                <Divider variant="middle" />
                                <StyledTitle variant="h6">Tags</StyledTitle>
                                <Pastel label="hello" />
                                <Pastel label="test 1" />
                                <br />
                                <br />
                                <div className={styles.tagInputWrapper}>
                                    <TextField
                                        variant="outlined"
                                        label="Tag"
                                        className={styles.tagInput}
                                        fullWidth
                                    />
                                    <IconButton color="primary">
                                        <AddIcon />
                                    </IconButton>
                                </div>
                            </CardContent>
                        </Collapse>
                    </Paper>
                    <br />
                    <Paper className={styles.card}>
                        <List className={styles.collapseList}>
                            <ListItem
                                button
                                className={styles.collapseListTitle}
                                onClick={toggleOptions}
                            >
                                <ListItemText primary="Options and configuration" />
                                <ListItemSecondaryAction>
                                    <ArrowDownIcon />
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                        <Collapse in={openOptions}>
                            <CardContent>
                                <ImagePicker image="https://source.unsplash.com/random?sig=0" />
                                <Divider variant="middle" />
                                <StyledTitle variant="h6">General</StyledTitle>
                                <List dense>
                                    <ListItem button>
                                        <Checkbox size="small" checked={true} />
                                        <ListItemText primary="Pinned" />
                                    </ListItem>
                                    <ListItem button>
                                        <Checkbox size="small" checked={true} />
                                        <ListItemText primary="Allow comments" />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Collapse>
                    </Paper>
                    <br />
                    <Paper className={styles.card}>
                        <List className={styles.collapseList}>
                            <ListItem
                                button
                                className={styles.collapseListTitle}
                                onClick={toggleVisibility}
                            >
                                <ListItemText primary="Visibility and schedule" />
                                <ListItemSecondaryAction>
                                    <ArrowDownIcon />
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                        <Collapse in={openVisibility}>
                            <CardContent>
                                <Divider variant="middle" />
                                <StyledTitle variant="h6">Listing</StyledTitle>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Visibility</InputLabel>
                                    <Select
                                        fullWidth
                                        value="public"
                                        labelWidth={65}
                                    >
                                        <MenuItem value="public">
                                            Public
                                        </MenuItem>
                                        <MenuItem value="private">
                                            Private
                                        </MenuItem>
                                        <MenuItem value="passwordprotected">
                                            Password protected
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <br />
                                <br />
                                <Collapse in={true}>
                                    <TextField
                                        variant="outlined"
                                        label="Password"
                                        fullWidth
                                    />
                                </Collapse>
                                <Divider variant="middle" />
                                <StyledTitle variant="h6">Schedule</StyledTitle>
                                <List>
                                    <ListItem button>
                                        <Checkbox size="small" checked={true} />
                                        <ListItemText primary="Schedule" />
                                    </ListItem>
                                </List>
                                <Collapse in={true}>
                                    <DateTimePicker
                                        inputVariant="outlined"
                                        label="Date"
                                        fullWidth
                                    />
                                </Collapse>
                            </CardContent>
                        </Collapse>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} xlg={9}>
                    <Card className={styles.card}>
                        <CardContent>
                            <StyledTitle variant="h4">General</StyledTitle>
                            <Grid container spacing="3">
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        variant="outlined"
                                        label="Slug"
                                        className={styles.tagInput}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <br />
                    <Card className={styles.card}>
                        <Tabs>
                            <Tab label="English" />
                            <Tab icon={<AddIcon />} />
                        </Tabs>
                        <Divider variant="middle" />
                        <CardContent>
                            <StyledTitle variant="h4">Description</StyledTitle>
                            <FroalaEditorComponent
                                model={model}
                                onModelChange={setModel}
                                key={key}
                                config={{
                                    toolbarButtons,
                                    theme:
                                        theme.palette.type === "dark"
                                            ? "darkmode"
                                            : "royal"
                                }}
                                tag="textarea"
                            />
                        </CardContent>
                        <CardContent>
                            <StyledTitle variant="h4">Content</StyledTitle>
                            <FroalaEditorComponent
                                model={model}
                                onModelChange={setModel}
                                key={key}
                                config={{
                                    toolbarButtons,
                                    theme:
                                        theme.palette.type === "dark"
                                            ? "darkmode"
                                            : "royal"
                                }}
                                tag="textarea"
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default withTheme(NewPost);
