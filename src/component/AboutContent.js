import './AboutContentStyle.css';
import React from 'react';

export const AboutContent=()=>{
    return(<div className='about'>
        <h1>Who am I?</h1>
        <hr/>
        <h2>Family Background</h2>
        <ul>
            <li>Name: Himan Biswas</li>
            <li>Father's Name: Uttam Biswas</li>
            <li>Mother's Name: Shilpi Biswas</li>
            <li>Date of Birth: 28/06/2003</li>
            <li>Address: Village- Raghabpur, Post Office- Darappur, Police Station- Chakda, Dist- Nadia, State- West Bengal, Country- India</li>
        </ul>
        <hr/>
        <h2>Educational Background</h2>
        <ul>
            <li>Present: Currently(2021-2025) I am pursuing my Bachelor of Engineering in Information Technoloy from Jadavpur University, Kolkata.</li>
            <li>Higher Secondary: I have passed Higher Secondary in 2020 from Darappur High School which is affilated to WBCHSE Board.</li>
            <li>Secondary: I have passed Secondary in 2018 from Darappur High School which is affilated to WBCSE Board.</li>
        </ul>
        <hr/>
        <h2>Technical Background</h2>
        <ul>
            <li>Programming Language: C, C++, Java, JavaScript</li>
            <li>Web Development: HTML, CSS, JavaScript, React, Node, Express, MongoDB</li>
            <li className='last'>Subjective Knowladge: Data Structure and Algorithm, Object Oriented Programming, Operating System, Database Management System, Structured Query Language</li>
        </ul>
    </div>)
}