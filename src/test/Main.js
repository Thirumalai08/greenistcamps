import React from 'react'
import Home from './pages/Home'
import '../test/test.css'
import '../test/util.css'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'

function Main(){
    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    )
}
export default Main