import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wrapper from '../Layouts/AdminPanel/Wrapper'
import Overview from '../Layouts/AdminPanel/Overview'
import Settings from '../Layouts/AdminPanel/Settings'

export default function AdminRouter() {
    return (
        <Wrapper>
            <Switch>
                <Route path="/admin" component={Overview} exact />
                <Route path="/admin/" component={Overview} exact />
                <Route path="/admin/settings" component={Settings} exact />
            </Switch>
        </Wrapper>
    )
}