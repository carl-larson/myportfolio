import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Carl Larson</h1>
                <h3>JavaScript Web Developer</h3>
                <h4>Optimistic Forward Progresser</h4>
            </header>
            <div className='Navigation'>
                <Link to='/'><button className='NavigationButton'>About</button></Link>
                <Link to='/projects'><button className='NavigationButton'>Projects</button></Link>
                <Link to='/resume'><button className='NavigationButton'>Resume</button></Link>
            </div>

        </div>
    )
}

export default Navigation