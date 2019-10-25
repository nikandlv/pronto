import React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core'
export default function Settings() {
    return (
        <div>
            <AppBar position="static" color="default">
                <Tabs value={0}  aria-label="simple tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
        </div>
    )
}