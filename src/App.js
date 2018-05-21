import React, { Component } from 'react'
import Button from '@material-ui/core/Button'


import logo from './logo.svg'
import './App.css'

import {MainDrawer} from './common/Drawer'

class App extends Component {
    render () {
        return (
            <div className="App">
                <MainDrawer/>

                <Button variant="raised" color="primary">
                    Hello World
                </Button>
            </div>
        )
    }
}

export default App