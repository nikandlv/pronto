import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/LanguageOutlined';
import LightIcon from '@material-ui/icons/BrightnessLowOutlined'
import LightOutIcon from '@material-ui/icons/Brightness2Outlined'
import MenuIcon from '@material-ui/icons/MenuOutlined'
import withDynamic from '../../Data/withDynamic';
import { Avatar, Menu, MenuItem, Hidden } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import { toggleTheme } from '../../Data/Actions/ApplicationActions';

const useStyles = makeStyles(theme => ({
    appbar: {
        backgroundColor: theme.palette.background.default,
        borderRadius: '1rem',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    avatarbase: {
      borderRadius: '2rem',
      margin: '0 0.5rem'
    }
}));

function Topbar(props) {
  const [languageEl, setLanguageEl] = React.useState()
  const [accountEl, setAccountEl] = React.useState()
  const classes = useStyles();

  const name = props.ApplicationReducer.name || 'Pronto'
  const theme = props.ApplicationReducer.theme || 'light'

  function openAdminPanel() {
    console.log(props)
    props.history.push('/admin')
  }

  const className = props.className || ''
  const position = props.position || 'static'
  return (
    <div className={classes.root}>
      <AppBar position={position} color="default" className={`${classes.appbar} ${className}`} elevation={2}>
        <Toolbar>
          <Hidden smUp implementation="css">
            {
              props.hasMenu
              ? (
                <IconButton onClick={props.onMenuClick}>
                  <MenuIcon />
                </IconButton>
              )
              : null
            }
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            {name}
          </Typography>
          <IconButton color="inherit" onClick={(event) => {
            setLanguageEl(event.currentTarget)
          }}>
              <LanguageIcon />
          </IconButton>
          
          <Menu open={Boolean(languageEl)} anchorEl={languageEl} onClose={() => {
            setLanguageEl(null)
          }}>
              <MenuItem>EN</MenuItem>
              <MenuItem>ES</MenuItem>
          </Menu>
          
          
          <IconButton color="inherit" onClick={props.toggleTheme}>
              {
                theme === 'light'
                ? <LightIcon />
                : <LightOutIcon />
              }
          </IconButton>
          
          <ButtonBase className={classes.avatarbase} onClick={(event) => {
            setAccountEl(event.currentTarget)
          }}>
            <Avatar src={'/img/user.png'} />
          </ButtonBase>

          <Menu open={Boolean(accountEl)} anchorEl={accountEl} onClose={() => {
            setAccountEl(null)
          }}>
              <MenuItem onClick={openAdminPanel}>Admin panel</MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Sign out</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withDynamic(withRouter(Topbar)).injectReducer('ApplicationReducer').injectAction('toggleTheme',toggleTheme).build()