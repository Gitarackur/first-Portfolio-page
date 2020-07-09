import React,{useState} from 'react'
import './Footer.css'
import Logo from '../../images/logo192.png'





const Footer = () => {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {    
        if (!showScroll && window.pageYOffset > 400){
           setShowScroll(true)    
        } else if (showScroll && window.pageYOffset <= 400){
           setShowScroll(false)    
        }  
     };
     
     const scrollTop = () =>{
         window.scrollTo({top: 0, behavior: 'smooth'});
      };
     
     
     window.addEventListener('scroll', checkScrollTop)     

    return (
        <div>      
            <a className={showScroll==false ? "float disappear" :"float"} onClick={scrollTop}>
                <i class="fa fa-arrow-up my-float" aria-hidden="true"></i>
            </a>


            <div className="credits">

                <div className="pt-2">
                made with <span className="hearts animate__animated infinite animate__pulse">&hearts;</span> by <a href="index.html">Peter</a>
                </div>
                

                <div className="pt-2">
                Built with <a href="index.html"> <img src={Logo} width="20" height="20"/> </a>
                </div>

                {/* <div>
                made With<img src={Logo} width="20" height="20"/> <a href="index.html">React</a>
                </div> */}
                
            </div>
        </div>
    )
}

export default Footer
