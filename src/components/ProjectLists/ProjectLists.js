import React from 'react'
import {Link, NavLink, Route, BrowserRouter, Switch}  from 'react-router-dom'

import { connect } from 'react-redux'

// import "./ProjectLists.css"

import Otherworks from '../OtherWorks/Otherworks'



const ProjectLists = (props) => {
    return (
        <section id="projects" className="about-boxes animate__animated animate__delay-1.6s">

            <section id="about" className="about mb-5">

                <div className="about-me container">
                <div className="section-title text-center mt-5">
                    <h3 className="About-me-txt h2-text">PROJECTS</h3>
                    <p className="h2">Recent Projects i've worked on</p>
                </div>
                </div>
                
            </section>

            <div className="container">

                <div className="row">
                {
                    props.projectsLiist.slice(0, 4) && props.projectsLiist.slice(0, 4).map(project =>{
                        return(
                            <Otherworks project={project} key={project.id}/>  
                        )
                    })
                }
                </div>
            </div>

        <div className="container p-2 mt-5 mb-5 text-center">
            <NavLink to="/moreProjects" className="btn-lg btn-book">More</NavLink>
        </div>
        
    </section>
    )
}


const mapStateToProps= (state)=>{
    console.log(state)
    return{
        projectsLiist: state.projectList.projects
    }
}




export default connect(mapStateToProps)(ProjectLists)

