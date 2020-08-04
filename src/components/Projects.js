import React from 'react'
// import { Link } from 'react-router-dom'


function Projects() {
    function goToSite(site) {
        console.log('Going to site: ', site)
    }
    return (
        <div className="App project-page">
            <h3>-Projects-</h3>
            <div className="project-flex">
                <div className="project-box" onClick={()=>{goToSite('https://concrete-craft-270101.appspot.com/')}}>
                    <h4 className="project-title">Capstone project: Play Farkle!</h4>
                    <h5>Features:</h5>
                    <p className="project-features">ACA Capstone project, ReactJS, original game code, custom CRUD API using Express and MySQL, custom CSS, </p>
                </div>
                <div className="project-box" onClick={()=>{goToSite('website2')}}>
                    <h4 className="project-title">Play a game of Robot War!</h4>
                    <h5>Features:</h5>
                    <p className="project-features">ACA Intro to JavaScript project, API fetching, DOM and Array manipulation</p>
                </div>
            </div>
        </div>
    )
}

export default Projects