import React from 'react'
import { Navbar } from '../component/Navbar'
import { Footer } from '../component/Footer'
import { Heroimg2 } from '../component/Heroimg2'
import { ProjectCard } from '../component/ProjectCard'

export const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="Given below are some of the projects that created by me."/>
      <ProjectCard 
      heading="p-Kart"
      text1="Developed a Responsive e-commerce platform using MERN Stack." 
      text2="Designed a RESTful API using Node.js and Express.js." 
      text3="Implemented a e-commerce platform that contains both user and admin site. In user site the functionalities are
      searching, filtering, user profile, placing order. In admin site extra functionalities are create,update,delete categories
      and products. Payment feature is added using Braintree." 
      text4="Technology Used: React.js, Node.js, Express.js, MongoDB, Braintree"
      />
      <ProjectCard 
      heading="Codeforces Problemsheet " 
      text1=" Developed a website that contain a login page which takes name and codeforces userid, using codeforces userid and
      codeforces API the user validation is performed." 
      text2=" In the problemsheet a user can add a codeforces problem and can solve problems that added by other users." 
      text3=" If any problem of problemsheet is solved by an user on codeforces then status of problem will be solved otherwise
      not solved and user can solve the problem by clicking on problem." 
      text4="Technology Used: React.js, Node.js, Express.js, Bootstrap, MongoDB, Codeforces API"
      />
      <Footer/>
    </div>
  )
}
