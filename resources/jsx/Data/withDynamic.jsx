import Store from './Store';
import {connect} from 'react-redux'

let reducer_list = []

let action_list = []

let component = null

const builder = {
    injectAction: (key,action) => {
        action_list[key] = action
        return builder
    },
    injectReducer: (reducer) => {
        reducer_list = [...reducer_list,reducer]
        return builder
    },
    build: () => {
        if(component === null) {
            console.error('Component should not be null')
        }
        return connect(() => (state) => {
            let result = {}
            Object.keys(state).map((key) => {
                if(reducer_list.includes(key)) {
                    result[key] = (state[key])
                }
            })
            return result
        },action_list)(component)
    }
}

export default function withDynamic(input) {
    component = input
    return builder
}