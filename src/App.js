import React, { Component } from 'react';
import './App.css';
import Drawer from '@material-ui/core/Drawer';

class App extends Component {
  render() {
    return (
      <div>

          <Drawer
              variant="persistent"
              anchor={anchor}
              open={open}
              classes={{
                  paper: classes.drawerPaper,
              }}
          >
              <div className={classes.drawerHeader}>
                  <IconButton onClick={this.handleDrawerClose}>
                      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
              </div>
              <Divider />
              <List>{mailFolderListItems}</List>
              <Divider />
              <List>{otherMailFolderListItems}</List>
          </Drawer>



      </div>
    );
  }
}

export default App;
