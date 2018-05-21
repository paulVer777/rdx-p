//tu bedziemy składać menu wewnatrz drawera


import React from 'react'
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import{HashRouter as Router,Route,Link} from 'react-router-dom'


const Menu = () => {

    return (

        <List>

            <Divider/>
            <MenuItem><Link to="/messages">Wiadomości</Link></MenuItem>
            <MenuItem><Link to="/users">Użytkownicy</Link></MenuItem>
            <MenuItem><Link to="/login">Logowanie</Link></MenuItem>
        </List>
    )
}


    export default Menu











