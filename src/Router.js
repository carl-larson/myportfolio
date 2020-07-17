import React from 'react'
import { Switch, Route } from 'react-router'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={About} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
        </Switch>
    )
}

export default Router