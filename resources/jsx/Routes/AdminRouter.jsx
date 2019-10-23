import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wrapper from '../Layouts/AdminPanel/Wrapper'
import Overview from '../Layouts/AdminPanel/Overview'

export default function AdminRouter() {
    return (
        <Wrapper>
            a
            <Switch>
            <Route path="/admin" component={Overview} exact />
            <Route path="/admin/" component={Overview} exact />
            </Switch>
        </Wrapper>
    )
}