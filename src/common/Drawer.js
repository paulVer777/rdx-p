import React, { Component } from 'react'


// HOC który pozwala wrzucić style do komponentu


import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Menu from './Menu'
import {withStyles} from '@material-ui/core/styles';


import MenuIcon from '@material-ui/icons/Menu';


// style wg material
const styles = theme => ({
    drawerPaper: {
        position: 'fixed',
        width: 300
    },
});

class MainDrawer extends Component {
    render () {
        return (
            <Drawer variant="persistent"
                    open={true}
                    anchor={'left'}
                    classes={{
                        paper:this.props.classes.drawerPaper
                    }}
            >
                <h1>test</h1>
                <Menu/>
            </Drawer>
        )
    }
}
export default withStyles(styles,{withTheme:true})(MainDrawer)