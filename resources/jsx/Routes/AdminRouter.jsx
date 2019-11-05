import React from "react";
import { Switch, Route } from "react-router-dom";
import Wrapper from "../Layouts/AdminPanel/Wrapper";
import Overview from "../Layouts/AdminPanel/Overview";
import Categories from "../Layouts/AdminPanel/Categories";
import Posts from "../Layouts/AdminPanel/Posts";
import Uploads from "../Layouts/AdminPanel/Uploads";
import Media from "../Layouts/AdminPanel/Media";
import Users from "../Layouts/AdminPanel/Users";
import Settings from "../Layouts/AdminPanel/Settings";
import posed, { PoseGroup } from "react-pose";

export default function AdminRouter() {
    return (
        <Wrapper>
            <Switch>
                <Route path="/admin" component={Overview} exact />
                <Route path="/admin/" component={Overview} exact />
                <Route path="/admin/categories" component={Categories} exact />
                <Route path="/admin/posts" component={Posts} exact />
                <Route path="/admin/uploads" component={Uploads} exact />
                <Route path="/admin/media" component={Media} exact />
                <Route path="/admin/users" component={Users} exact />
                <Route path="/admin/settings" component={Settings} exact />
            </Switch>
        </Wrapper>
    );
}
