import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import logo from './logo.svg'
import './App.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import MainDrawer from './common/Drawer'
import AppBar from './common/Appbar'
import Nav from './common/Nav'

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

            <Router>

            <div className="App">
                <MainDrawer

                isDrawerOpen={this.state.isDrawerOpen}
                handleToggle={()=>{this.handleToggle()}}
                />
                <AppBar
                    handleToggle={()=>{this.handleToggle()}}

                />
                <Nav/>
            </div>


            </Router>
        )
    }
}

export default App