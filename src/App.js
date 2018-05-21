import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import logo from './logo.svg'
import './App.css'

import MainDrawer from './common/Drawer'
import AppBar from './common/Appbar'


class App extends Component {

    state={

        isDrawerOpen:true
    }

    handleToggle(){


        this.setState({

          isDrawerOpen:!this.state.isDrawerOpen

        })
    }

    //najpierw przekazac propsy, a potem rozlozyc to wewnatrz komponentu

    render () {
        return (
            <div className="App">
                <MainDrawer

                isDrawerOpen={this.state.isDrawerOpen}
                handleToggle={()=>{this.handleToggle()}}
                />
                <AppBar
                    handleToggle={()=>{this.handleToggle()}}

                />
            </div>
        )
    }
}

export default App