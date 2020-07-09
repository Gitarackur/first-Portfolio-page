import React from 'react'
import {Link, NavLink, Route, BrowserRouter, Switch}  from 'react-router-dom'

// import Header from "./Header/Header"
import Main from '../Main/Main'
import About from "../About/About"
import ProjectLists from '../ProjectLists/ProjectLists'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import OtherProjectsPage from '../OtherProjectPage/OtherProjectsPage'


const Home = () => {
    return (
        <div className="App">
            <Main/>
            <About/>
            <ProjectLists/>
            <Contact/>
            <Footer/>
        </div>  
    )
}

export default Home
