
import React, { Component } from 'react'
import {Link, NavLink, Route, BrowseRouter}  from 'react-router-dom'
import Typist from 'react-typist';
// import { PageTransition } from '@steveeeie/react-page-transition';
// import PageTransition from 'react-router-page-transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux'

import Navbar from '../Navbar/Navbar'
import Otherworks from '../OtherWorks/Otherworks'
import './OtherProjectsPage.css'






export class OtherProjectsPage extends Component {

    componentDidMount(){
        if (window.pageYOffset > 400){
            window.scrollTo({top: 0});
        } else if (window.pageYOffset <= 400){
            return null
        }   
    }

    render() {
        return (

            <ReactCSSTransitionGroup 
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>

                <div className="transition-item">
                
                    <div className="d-flex justify-content-center pt-5">
                        
                        <div className="text-center">
                        <Typist className="MyTypist">
                            <h3>...cd otherProjects</h3>
                        </Typist>    
                        </div>
                        
                    </div>
                        
                    <div className="text-center d-flex justify-content-center p-0">
                        <NavLink to="/" className="mt-3 btn btn-lg btn-book animated fadeInUp scrollto">Home</NavLink>
                    </div>
                    
                        
                

                    <section id="projects" className="about-boxes animate__animated animate__delay-1.6s">

                        <section id="about" className="about mb-5">

                            <div className="about-me container">
                                <div className="section-title text-center mt-0">
                                    <h3 className="About-me-txt h2-text">PROJECTS</h3>
                                    <p className="h2">Recent Projects i've worked on</p>
                                </div>
                            </div>
                                
                        </section>


                        <div className="container">
                            <div className="row">
                                {
                                    this.props.projectsLiist && this.props.projectsLiist.map(project =>{
                                        return(
                                            <Otherworks project={project} key={project.id}/>  
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <section id="about" className="about mb-5">

                            <div className="about-me container">
                                <div className="section-title text-center mt-5">
                                    <h3 className="About-me-txt h2-text">COLLABORATION PROJECTS</h3>
                                    <p className="h2"> Projects Done by collaboration</p>
                                </div>
                            </div>
                                
                        </section>

                        <div className="container">
                            <div className="row">
                                {
                                    this.props.collapProjects && this.props.collapProjects.map(project =>{
                                        return(
                                            <Otherworks project={project} key={project.id}/>  
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </ReactCSSTransitionGroup>
            
        )
    }
}



const mapStateToProps= (state)=>{
    console.log(state)
    return{
        projectsLiist: state.projectList.projects,
        collapProjects: state.projectList.collabs,
    }
}

export default connect(mapStateToProps)(OtherProjectsPage)
