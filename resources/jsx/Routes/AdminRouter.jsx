import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wrapper from '../Layouts/AdminPanel/Wrapper'
import Overview from '../Layouts/AdminPanel/Overview'
import Categories from '../Layouts/AdminPanel/Categories'
import Posts from '../Layouts/AdminPanel/Posts'
import Settings from '../Layouts/AdminPanel/Settings'

export default function AdminRouter() {
    return (
        <Wrapper>
            <Switch>
                <Route path="/admin" component={Overview} exact />
                <Route path="/admin/" component={Overview} exact />
                <Route path="/admin/categories" component={Categories} exact />
                <Route path="/admin/posts" component={Posts} exact />
                <Route path="/admin/settings" component={Settings} exact />
            </Switch>
        </Wrapper>
    )
}