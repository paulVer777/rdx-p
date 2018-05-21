//tu bedziemy składać menu wewnatrz drawera


import React from 'react'
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';

const Menu = () => {

    return (

        <List>

            <Divider/>
            <MenuItem>Logowanie</MenuItem>
            <MenuItem>Wiadomości</MenuItem>
            <MenuItem>Użytkownicy</MenuItem>
        </List>
    )
}


    export default Menu











