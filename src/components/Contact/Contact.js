import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact mb-5">
            <div className="container">

                <div className="section-title animate__animated animate__delay-1.6s">
                    <h2 className="contact-us-text h2-text">Contact</h2>
                    <p className="h2">Contact Me</p>
                </div>

            
                <div className="row ">

                    <div className="col-md-6 col-lg-4 mt-sm-4 d-flex align-items-center justify-content-center share animate__animated animate__delay-1.0s">
                    <div className="info-box">
                        <i className="bx bx-share-alt"></i>
                        <h3>Social Profiles</h3>
                        <div className="social-links">
                            <a href="https://twitter.com/osah_peter" className="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="https://web.facebook.com/peter.kendrick.184/" className="facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                            <a href="https://wa.me/2347030789049" className="google-plus"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/peter-osah-744118179/" className="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://github.com/Gitarackur" className="Github"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mt-sm-4 d-flex align-items-center justify-content-center email animate__animated animate__delay-2.0s">
                    <div className="info-box">
                        <i className="bx bx-envelope"></i>
                        <h3>Email Me</h3>
                        <p>Peterosah5@gmail.com</p>
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mx-auto mt-sm-4 d-flex align-items-center justify-content-center number animate__animated animate__delay-3.0s">
                    <div className="info-box">
                        <i className="bx bx-phone-call"></i>
                        <h3>Call Me</h3>
                        <p>+234 703 078 9049</p>
                        <p>+234 907 212 6146</p>
                    </div>
                    </div>

                </div>
            </div>
        </section>  
    )
}

export default Contact
