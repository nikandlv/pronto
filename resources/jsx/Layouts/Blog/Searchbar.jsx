import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Explore from '@material-ui/icons/ExploreOutlined';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import withDynamic from '../../Data/withDynamic';
import { setSearch, setTag } from '../../Data/Actions/ApplicationActions';
import { Chip, Collapse } from '@material-ui/core';
const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '100rem'
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    chips: {
        transition: 'margin-top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&.off': {
            marginTop: 0
        },
        '&.on': {
            marginTop: 16
        }
    },
    chip: {
        margin: 2,
        cursor: 'pointer',
        '&:hover,&:active': {
            boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
        }
    }
};

function Searchbar(props) {
    const [filterMode,setFilterMode] = React.useState(false)
    const { classes } = props;
    let query = "";
    const locale = props.ApplicationReducer.locale || {};
    
    function selectChip(tag) {
        return () => {
            props.setTag(tag)
        }
    }

    return (
        <div>
            <Paper className={classes.root+" paper"} elevation={1}>
                <IconButton className={classes.iconButton} aria-label="Menu">
                    <Explore />
                </IconButton>
                <InputBase className={classes.input} defaultValue={query} onKeyPress={(event)=> {
                    if(event.key === 'Enter'){
                        if(query !== "") {
                            props.setSearch(query)
                        }
                    }
                }} onChange={(event)=> {
                    query = event.target.value;
                }} placeholder={locale.search_placeholder} />
                <IconButton className={classes.iconButton} aria-label="Search"  onClick={()=> {
                    if(query !== "") {
                        props.setSearch(query)
                    }
                }}>
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} />
                <IconButton color="primary" className={classes.iconButton} aria-label="Filter mode"  onClick={()=> {
                    setFilterMode(!filterMode)
                }}>
                    <FilterListIcon />
                </IconButton>
            </Paper>
            <Collapse className={`${classes.chips} ${filterMode ? "on" : "off"}`} in={filterMode}>
                <Chip label="hello" className={classes.chip} onClick={selectChip('hello')}/>
                <Chip label="oct" className={classes.chip} onClick={selectChip('oct')}/>
                <Chip label="download" className={classes.chip} onClick={selectChip('download')}/>
                <Chip label="free" className={classes.chip} onClick={selectChip('free')}/>
                <Chip label="sale" className={classes.chip} onClick={selectChip('sale')}/>
                <Chip label="story" className={classes.chip} onClick={selectChip('story')}/>
                <Chip label="general" className={classes.chip} onClick={selectChip('general')}/>
                <Chip label="security" className={classes.chip} onClick={selectChip('security')}/>
            </Collapse>
        </div>
    );
}

Searchbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withDynamic(withStyles(styles)(Searchbar))
                .injectReducer('ApplicationReducer')
                .injectAction('setSearch',setSearch)
                .injectAction('setTag',setTag)
                .build();