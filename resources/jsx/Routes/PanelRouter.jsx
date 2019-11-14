import React from "react";
import { Switch, Route } from "react-router-dom";
import Wrapper from "../Layouts/Panel/Wrapper";
import Overview from "../Layouts/Panel/Overview";
import Categories from "../Layouts/Panel/Categories";
import Posts from "../Layouts/Panel/Posts";
import Uploads from "../Layouts/Panel/Uploads";
import Media from "../Layouts/Panel/Media";
import Users from "../Layouts/Panel/Users";
import Settings from "../Layouts/Panel/Settings";
import posed, { PoseGroup } from "react-pose";
import EditUser from "../Layouts/Panel/EditUser";
import Widgets from "../Layouts/Panel/Widgets";

const RouteContainer = posed.div({
    enter: { y: 0, opacity: 1, beforeChildren: true },
    exit: { y: 100, opacity: 0 }
});

export default function AdminRouter(props) {
    return (
        <Wrapper>
            <PoseGroup>
                <RouteContainer key={props.location.pathname}>
                    <Switch location={props.location}>
                        <Route path="/admin" component={Overview} exact />
                        <Route path="/admin/" component={Overview} exact />
                        <Route
                            path="/admin/categories"
                            component={Categories}
                            exact
                        />
                        <Route path="/admin/posts" component={Posts} exact />
                        <Route
                            path="/admin/uploads"
                            component={Uploads}
                            exact
                        />
                        <Route path="/admin/media" component={Media} exact />
                        <Route path="/admin/users" component={Users} exact />
                        <Route
                            path="/admin/users/edit/:id"
                            component={EditUser}
                            exact
                        />
                        <Route
                            path="/admin/widgets"
                            component={Widgets}
                            exact
                        />
                        <Route
                            path="/admin/settings"
                            component={Settings}
                            exact
                        />
                    </Switch>
                </RouteContainer>
            </PoseGroup>
        </Wrapper>
    );
}
