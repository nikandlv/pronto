import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import withDynamic from "../Data/withDynamic";
import { red } from "@material-ui/core/colors";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const theme = {
    light: createMuiTheme({
        palette: {
            type: "light",
            primary: {
                main: "#007AFF"
            },
            secondary: {
                main: red[500]
            }
        }
    }),
    dark: createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#007AFF"
            },
            secondary: {
                main: red[500]
            }
        }
    })
};
function Wrapper(props) {
    let currentTheme = theme.light;
    if (props.ApplicationReducer.theme === "dark") {
        currentTheme = theme.dark;
    }
    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {props.children}
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
}

export default withDynamic(Wrapper)
    .injectReducer("ApplicationReducer")
    .build();
