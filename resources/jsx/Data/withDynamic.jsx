import { connect } from "react-redux";

class Builder {
    reducer_list = [];

    action_list = [];

    component = null;

    constructor(component) {
        this.component = component;
    }

    injectAction(key, action) {
        this.action_list[key] = action;
        return this;
    }
    injectReducer(reducer) {
        this.reducer_list = [...this.reducer_list, reducer];
        return this;
    }
    build() {
        if (this.component === null) {
            console.error("Component should not be null");
        }
        return connect(
            () => state => {
                let result = {};
                Object.keys(state).map(key => {
                    if (this.reducer_list.includes(key)) {
                        result[key] = state[key];
                    }
                });
                return result;
            },
            this.action_list
        )(this.component);
    }
}

export default function withDynamic(component) {
    return new Builder(component);
}
