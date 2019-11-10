import React from "react";
import AuthorWidget from "./Widgets/AuthorWidget";
import { Typography } from "@material-ui/core";
import GithubWidget from "./Widgets/GithubWidget";

const available = {
    LINK_WIDGET: AuthorWidget,
    GITHUB_WIDGET: GithubWidget,
    TEXT_WIDGET: AuthorWidget,
    AUTHORS_WIDGET: AuthorWidget
};

export default function WidgetArea(props) {
    const widgets = props.widgets || [];
    return (
        <React.Fragment>
            {widgets.map(widget => {
                if (typeof available[widget.type] !== "undefined") {
                    let Component = available[widget.type];
                    return <Component {...widget} key={widget.id} />;
                }
                return (
                    <Typography key={widget.id}>Widget not found!</Typography>
                );
            })}
        </React.Fragment>
    );
}
