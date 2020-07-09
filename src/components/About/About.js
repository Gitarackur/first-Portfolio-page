import React from 'react'
import './About.css'
import me from '../../images/me-dark.jpg'
import metoo from '../../images/me-dark_2.jpg'



const About = () => {
    return (
        <section id="about" className="about">

            <div className="about-me container">
                <div className="section-title">
                    <h3 className="About-me-txt h2-text">About</h3>
                    <p className="h2">Learn more about me</p>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-5 imgg animate__animated animate__delay-1.0s">
                    <img src={metoo} className="img-fluid img-responsive mee-img" alt="" />
                    </div>


                    <div className="col-lg-7 pt-4 pt-lg-0 hddin animate__animated animate__delay-1.6s">

                        <div className="container content">
                            <h3 className="heading-text">Front-End Developer</h3>

                            <p className="">
                            Being a Front End Developer implies I assume liability for the plan and feel of site pages, from an excellent User Interface to amazing User Experience, likewise ensuring that sites effectively adjust to any gadget. 
                            With the utilization of most recent innovations accessible and the most current methodology, I make my locales straightforward and instinctive, allowing a usability and a magnificent/fun experience to standard clients 
                            and one time guests while keeping up similarity and keeping execution at its best.
                            </p>


                            <div className="row">
                                <div className="col-lg-6">
                                    <p>Skills</p>
                                <ul className="info">
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><strong>HTML</strong> </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>CSS </strong></li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><strong>Bootstrap</strong></li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>Materialize CSS</strong> </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>javascript(ES6)</strong> </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>React/Redux </strong> </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>Python (Basic Knowledge)</strong> </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>Flutter (Basic Knowledge)</strong> </li>
                                </ul>
                                </div>
                                <div className="col-lg-6">
                                    <p>Tools</p>
                                <ul className="info">
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>Github</strong></li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>Netlify</strong></li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>eslint/webpack</strong> </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> <strong>Firebase</strong> </li>
                                </ul>
                                </div>
                            </div>
                            <p className="pt-3">
                                I also have fun things i do during my free time &#128517;. &nbsp;
                                 My Hobbies Include Reading Books on Science and Technology, documentaries, Manga, Comics, Learning new Technologies and Watching Movies and Anime.
                            </p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
