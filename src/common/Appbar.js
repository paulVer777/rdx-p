import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const MainAppbar=(props)=>{

    const {isDrawerOpen, handleToggle}=props //rozbicie propsow.

    return(

        <AppBar position="static">
        <IconButton onClick={()=>{props.handleToggle()}} color="inherit" aria-label="Menu">
        <MenuIcon/>
        </IconButton>
        </AppBar>
    )
}


   export default MainAppbar








