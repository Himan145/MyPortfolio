import React from 'react'
import { Navbar } from '../component/Navbar'
import { Footer } from '../component/Footer'
import { Heroimg2 } from '../component/Heroimg2'
import { Form } from '../component/Form'

export const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT ME" text="Fill the given form to contact with me."/>
      <Form/>
      <Footer/>
    </div>
  )
}

