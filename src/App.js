import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import logo from './logo.svg'
import './App.css'

import MainDrawer from './common/Drawer'
import AppBar from './common/Appbar'


class App extends Component {
    render () {
        return (
            <div className="App">
                <MainDrawer/>
                <AppBar/>
            </div>
        )
    }
}

export default App