import React from 'react'
import { Switch, Route } from 'react-router'
import Home from '../components/Home'
import Resume from '../components/resume'
import Projects from '../components/projects'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
        </Switch>
    )
}

export default Router