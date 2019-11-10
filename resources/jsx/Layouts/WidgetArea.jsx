import React from "react";
import AuthorWidget from "./Widgets/AuthorWidget";
import { Typography } from "@material-ui/core";
import GithubWidget from "./Widgets/GithubWidget";
import TextWidget from "./Widgets/TextWidget";
import LinkWidget from "./Widgets/LinkWidget";

const available = {
    LINK_WIDGET: LinkWidget,
    GITHUB_WIDGET: GithubWidget,
    TEXT_WIDGET: TextWidget,
    AUTHOR_WIDGET: AuthorWidget
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
