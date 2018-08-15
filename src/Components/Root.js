import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from './Sidebar';
import WeatherToday from './WeatherToday';
import WeatherSections from './WeatherSections';
import AreaChart from './AreaChart';

const drawerWidth = '240px';

const styles = (theme) => ({
  appBar: {
    marginLeft: drawerWidth,
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth})`
    }
  },
  desktopHide: {
    [theme.breakpoints.up('md')]: { display: 'none' }
  },
  mobileHide: {
    [theme.breakpoints.down('sm')]: { display: 'none' }
  },
  drawerPaper: {
    width: drawerWidth
  }
});

class Header extends Component {
  
  state = {
    menuOpen: false,
    groupOpen: false
  };

  drawerToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  groupToggle = () => {
    this.setState({ groupOpen: !this.state.groupOpen });
  };

  render() {
    const { classes } = this.props;
    const drawer = (
      <Sidebar
        groupOpen={this.state.groupOpen}
        groupToggle={this.groupToggle}
      />
    );
    return (
      <div>
        
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={this.drawerToggle}
            className={classes.desktopHide}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            myENV
          </Typography>
          <div className="nea_grow" />
          <IconButton color="inherit">
            <i className="material-icons">wifi_tethering</i>
          </IconButton>
          <IconButton color="inherit">
            <i className="material-icons">notification_important</i>
          </IconButton>
        </Toolbar>
      </AppBar>

        <div className="nea_container">
          <div className={classes.desktopHide}>
            <Drawer
              variant="temporary"
              anchor="left"
              open={this.state.menuOpen}
              onClose={this.drawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true
              }}>
              {drawer}
            </Drawer>
          </div>
          <div className={classes.mobileHide} style={{ width: drawerWidth }}>
            <Drawer
              variant="permanent"
              open={true}
              classes={{
                paper: classes.drawerPaper
              }}>
              {drawer}
            </Drawer>
          </div>

          <div className="nea_content">
            <div className="nea_section1">
              <WeatherToday />
              <WeatherSections />              
            </div>
            <div className="nea_section2">
              <AreaChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
