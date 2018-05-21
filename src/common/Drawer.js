import React, {Component} from 'react'


// HOC który pozwala wrzucić style do komponentu


import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Menu from './Menu'
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Close from '@material-ui/icons/Close'


// style wg material
const styles = theme => ({
    drawerPaper: {
        position: 'fixed',
        width: 300
    },
});

class MainDrawer extends Component {


    render() {

    const {isDrawerOpen, handleToggle}=this.props

        console.log(this.props)

        return (
            <Drawer variant="persistent"
                    open={isDrawerOpen}
                    anchor={'left'}
                    classes={{
                        paper: this.props.classes.drawerPaper
                    }}
            >
                <h1>test</h1>

                <IconButton onClick={handleToggle}>
                    <Close />
                </IconButton>


                <Menu/>
            </Drawer>
        )
    }
}

export default withStyles(styles, {withTheme: true})(MainDrawer)