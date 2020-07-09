import React, { useState, Component } from 'react'
import './Header.css'
import Intro from "../Intro/Intro"
import HeaderAnimation from '../HeaderAnimation/HeaderAnimation'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'



export class Header extends Component {

    render() {
        return (
            <div className= "landing-page">
                <Navbar/>
                <Intro/>
                <HeaderAnimation/>
            </div>
        )
    }
}



export default Header
