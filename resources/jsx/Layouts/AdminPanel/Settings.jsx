import React from 'react';
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles({
    appbar: {
        borderRadius: '1rem',
        overflow: 'hidden'
    }
});

export default function Settings() {
    const styles = useStyles();
    return (
        <div>
            <AppBar className={styles.appbar} position="static" color="default">
                <Tabs value={0} aria-label="simple tabs example">
                    <Tab label="General" />
                    <Tab label="Posts" />
                    <Tab label="Comments" />
                    <Tab label="Users" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                index={index}
                onChangeIndex={this.handleChangeIndex}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </SwipeableViews>
        </div>
    );
}
