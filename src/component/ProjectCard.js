import { NavLink } from 'react-router-dom';
import './ProjectCardStyle.css';
import React from 'react';

export const ProjectCard=(props)=>{
    return(<div className='projectcard-container'>
        <div className='project-card'>
            <h2>{props.heading}</h2>
            <div className='project-card-text'>
                <ul>
                <li>{props.text1}</li>
                <li>{props.text2}</li>
                <li>{props.text3}</li>
                <li>{props.text4}</li>
                </ul>
            </div>
            <div className='pro-btn'>
                <NavLink to="/absc" className="btn">CODE</NavLink>
                <NavLink to="/absc" className="btn">LIVE</NavLink>
            </div>
        </div>
    </div>)
}