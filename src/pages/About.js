import React from 'react';
import { Navbar } from '../component/Navbar';
import { Footer } from '../component/Footer';
import { Heroimg2 } from '../component/Heroimg2';
import { AboutContent } from '../component/AboutContent';

export const About=()=>{
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT ME" text="See text given below to know better about me"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}