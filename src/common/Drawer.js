import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'


export class MainDrawer extends Component {
    render () {
        return (
            <Drawer variant="persistent"
                    open={true}
                    anchor={'left'}
                    style={{width:400}}
            >
                <h1>test</h1>
            </Drawer>
        )
    }
}