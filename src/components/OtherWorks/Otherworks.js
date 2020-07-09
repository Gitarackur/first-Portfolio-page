import React from 'react'
import './Otherworks.css'
// import '../ProjectLists/ProjectLists.css'
import Logo from '../../images/logo192.png'

const Otherworks = (props) => {
    // const logo = require('../../images/ggfxi.png');

    return (
        <div className="col-lg-6 col-md-6 d-flex align-items-stretch" key={props.project.id}>
            <div className="card card1 animate__animated" style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,8), rgba(0,0,0,0.8)"}}>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.project.name}</h5>
                    <p className="card-text text-center">{props.project.detailsOfProject}</p>
                    
                    <div className="col-auto d-flex justify-content-center">
                        <a href={props.project.link} target="blank" className="mt-3 btn btn-lg btn-book animated fadeInUp scrollto">Visit Page</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otherworks
