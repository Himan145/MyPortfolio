import './HeroimgStyle.css';
import React from 'react';
import IntroImg from '../images/laptop-2557576_1280.jpg'
import { Link } from 'react-router-dom';

export const Heroimg=()=>{
    return(<div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='int-img'/>
        </div>
        <div className='content'>
            <p>HI, I'M HIMAN BISWAS</p>
            <h1>MERN STACK DEVELOPER</h1>
            <div>
                <Link to={"/project"} className='btn'>Projects</Link>
                <Link to={"/contact"} className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>)
}