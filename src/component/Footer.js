import './FooterStyle.css';
import React from 'react';
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const Footer=()=>{
    return(<div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>JUSL Boys Hostel</p>
                        <p>Kolkata, India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/> +91 6297036273
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/> himanbiswas376@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>I am a Full Stack Web Developer , I working in MERN Stack from last 1 year and looking for a SDE role.</p>
                <div className='social'>
                    <Link to={""}><FaFacebook size={30} style={{color:"#fff" , marginRight:"1rem"}}/></Link>
                    <Link><FaTwitter size={30} style={{color:"#fff" , marginRight:"1rem"}}/></Link>
                    <Link to={"https://www.linkedin.com/in/himan-biswas-4a2022246/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><FaLinkedin size={30} style={{color:"#fff" , marginRight:"1rem"}}/></Link>
                </div>
            </div>
        </div>
    </div>)
}