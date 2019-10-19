import React from 'react'
import { Provider } from 'react-redux'
import Store from './Store';

export default class ReduxProvider extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                {this.props.children}
            </Provider>
        )
    }
}