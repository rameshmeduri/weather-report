import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
  root: {
    backgroundColor: '#fafafa',
    height: '100vh'
  },
  heading: {
    minHeight: '64px',
    backgroundColor: '#006fa1',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 500,
    fontFamily: 'Roboto',
    lineHeight: '1.2rem',
    padding: '10px 0 0 10px'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

const Sidebar = ({ classes, groupOpen, groupToggle }) => {
  return (
    <div className={classes.root}>
      <div className={classes.heading}>National Environment Agency</div>
      <Divider />
      <List component="nav">
        <ListItem button><ListItemText primary="Item1" /></ListItem>
        <ListItem button><ListItemText primary="Item2" /></ListItem>
        <ListItem button onClick={groupToggle}>
          <ListItemText primary="Group1" />
          {groupOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={groupOpen} timeout="auto" unmountOnExit>
          <ListItem button className={classes.nested}><ListItemText primary="Item3" /></ListItem>
          <ListItem button className={classes.nested}><ListItemText primary="Item4" /></ListItem>
        </Collapse>
        <ListItem button><ListItemText primary="Item5" /></ListItem>
        <ListItem button><ListItemText primary="Item6" /></ListItem>
      </List>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Sidebar);
