import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import withDynamic from '../Data/withDynamic';
import Topbar from './Blog/Topbar';
import { Box } from '@material-ui/core';
const theme = {
    light: createMuiTheme({
        palette: {
            type: 'light'
        },  
    }),
    dark: createMuiTheme({
        palette: {
            type: 'dark'
        },  
    })
};
function Wrapper(props) {
    let currentTheme = theme.light
    if(props.ApplicationReducer.theme === 'dark') {
        currentTheme = theme.dark
    }
    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Box m={2}>
            <Topbar {...props} />
            </Box>
            {props.children}
        </ThemeProvider>
    )
}

export default withDynamic(Wrapper).injectReducer('ApplicationReducer').build()