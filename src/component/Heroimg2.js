import './Heroimg2Style.css';
import React from 'react';

export const Heroimg2=(props)=>{
    return(<div className='hero-img'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>)
}