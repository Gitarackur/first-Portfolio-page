import React from 'react'
import './Intro.css'

const Intro = () => {
    return (
        <div className="Intro">
            <div className="container mt-5">
            <h1 className="animate__animated animate__fadeInLeft animate__delay-0.5s">Hi, I'm <span style={{color: "#35e888"}}>Peter.</span></h1>
            <h3 className="Iam-text animate__animated animate__fadeIn animate__delay-1s">I'm a passionate <span className="job-desc">Web Developer</span> from Nigeria</h3>
            <p className="mt-4 Iam-text p-text animate__fadeInDown animate__animated animate__delay-2s">
            An Everlearning innovative Frontend Engineer at present in Lagos Nigeria. I fabricate pixel-impeccable UIs and javascript applications that sudden spike in demand for the web. I'm an inventive designer with great relational abilities, with a thing for building versatile applications
            </p>
        
            <div className="mt-4 intro-box">
                <div className="social-links animate__animated animate__fadeInLeft animate__delay-3s">
                    <a href="https://twitter.com/osah_peter" className="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://web.facebook.com/peter.kendrick.184/" className="facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="https://wa.me/2347030789049" className="google-plus"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/peter-osah-744118179/" className="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://github.com/Gitarackur" className="Github"><i class="fa fa-github" aria-hidden="true"></i></a>
                </div>
            </div>
        
            </div>
        </div>
    )
}

export default Intro
