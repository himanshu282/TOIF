import React from 'react';
import '../toi.css';
import { Button } from 'reactstrap';

const FooterComponent = () => {
    return (
        <div className="footer">
        <div className="row"> 
            <div className="col-3">
            <img src="/images/logo.png" alt="think of it" />
            <p className="footer-text"> By The Youth, For The Youth! </p>
            </div>
            <div className="col-3">
                <h4> USEFUL LINKS  </h4> 
            <ul>
                <li> <a href="#"> Blogs </a></li> <hr/>
                <li> <a href="#"> Contact Us </a></li> <hr/>
                <li> <a href="#"> Privacy Policy </a></li> <hr/>
                <li> <a href="#"> Terms and Conditions </a></li> <hr/>
                <li> <a href="#"> Disclaimer </a></li> <hr/>
            </ul>  
            </div>
            <div className="col-3">
                <h4> FOLLOW US </h4>
                <p className="footer-text"> Follow us on our social media profile in order to keep updated. </p>
                <a href="https://twitter.com/THINKOFITFOUND1" target="_blank"> <i className="fab fa-twitter"> </i> </a>
                <a href="https://www.instagram.com/think_of_it_foundation/" target="_blank"> <i className="fab fa-instagram"> </i> </a>
                <a href="https://www.linkedin.com/company/toi-for-youngindia/" target="_blank"> <i className="fab fa-linkedin-in"> </i> </a>
            </div>
            <div className="col-3">
                <h4> OUR NEWSLETTER </h4>
                <p className="footer-text"> Stay up to date on TOI stories, TOI's monthly newsletter, along with the junction points where you can join us on the road we are taking. </p>
                <input type="text"  placeholder="Enter your email"  onChange="" value='' />
                <Button type="submit" >Subscribe</Button>

            </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto ">
                    <p >All Rights Reserved by ©Think Of It Foundation 2020 </p>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent
