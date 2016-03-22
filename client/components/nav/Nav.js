import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/lib/app-bar'
import CreateIcon from 'material-ui/lib/svg-icons/image/palette'
import DiscoverIcon from 'material-ui/lib/svg-icons/device/wallpaper'
import FlatButton from 'material-ui/lib/flat-button'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import ProfileIcon from 'material-ui/lib/svg-icons/action/face'

import darkBaseTheme from 'material-ui/lib/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'

import { connect } from 'react-redux'

const darkMuiTheme = getMuiTheme(darkBaseTheme)

// refactored to utilize the container / presentational component model
// Note: Nav now has a container, which manages the state

let Nav = ({
  isAuth,
  onLogoutClick,
  username
}) => {
  const styles = {
    nav: {
      position: 'fixed',
      top: 0
    },
    title: {
      color: 'white',
      fontSize: '1.8em',
      textTransform: 'capitalize'
    }
  }

  return (
    <MuiThemeProvider muiTheme={darkMuiTheme}>
    
      <AppBar
        id="nav-component"
        style={styles.nav}
        iconElementLeft={
          <div>
            <Link to={'/'}><FlatButton
              label='Open Gallery'
              backgroundColor='#0097a7'
              style={styles.title}
            /></Link>
            <IconButton tooltip='Create'>
              <CreateIcon color='#303030'/>
            </IconButton>
            <IconButton tooltip='Discover'>
              <DiscoverIcon color='#303030'/>
            </IconButton>
          </div>
        }
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><ProfileIcon/></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <Link to={`/profile/${username}`}><MenuItem primaryText='Profile'/></Link>
            <Link to={`/profile/${username}1`}><MenuItem primaryText='Different Profile'/></Link>
            <Link to={'/'}><MenuItem primaryText='Sign Out' onClick={ onLogoutClick }/></Link>
          </IconMenu>
        }
      />
   </MuiThemeProvider>
  )
}

export default Nav;
