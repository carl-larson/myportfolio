import React from 'react'
import { Switch, Route } from 'react-router'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import RobotPath from './components/RobotPath'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={About} />
            <Route path='/resume' component={Resume} />
            <Route exact path='/projects' component={Projects} />
            <Route path='/robotpath' component={RobotPath} />
        </Switch>
    )
}

export default Router