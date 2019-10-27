import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Wrapper from '../Layouts/Wrapper'
import BlogRouter from './BlogRouter'
import AdminRouter from './AdminRouter'
import PanelRouter from './PanelRouter'

export default function MainRouter(props) {
    return (
            <BrowserRouter>
                <Wrapper>
                        <Switch>
                            <Route path="/panel/*" component={AdminRouter} {...props}/>
                            <Route path="/admin/*" component={PanelRouter} {...props}/>
                            <Route path="/*" component={BlogRouter} {...props}/>
                        </Switch>
                </Wrapper>
            </BrowserRouter>
    )
}