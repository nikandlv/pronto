import React from "react";
import AuthorWidget from "./Widgets/AuthorWidget";
import { Typography } from "@material-ui/core";
import GithubWidget from "./Widgets/GithubWidget";
import posed, { PoseGroup } from "react-pose";

const available = {
    LINK_WIDGET: AuthorWidget,
    GITHUB_WIDGET: GithubWidget,
    TEXT_WIDGET: AuthorWidget,
    AUTHORS_WIDGET: AuthorWidget
};

const Item = posed.div({});

export default function AnimatedWidgetArea(props) {
    const widgets = props.widgets || [];
    return (
        <React.Fragment>
            <ul>
                <PoseGroup>
                    {widgets.map(widget => {
                        if (typeof available[widget.type] !== "undefined") {
                            let Component = available[widget.type];
                            return (
                                <Item key={widget.id}>
                                    <Component {...widget} />
                                </Item>
                            );
                        }
                        return (
                            <Item key={widget.id}>
                                <Typography>Widget not found!</Typography>
                            </Item>
                        );
                    })}
                </PoseGroup>
            </ul>
        </React.Fragment>
    );
}
