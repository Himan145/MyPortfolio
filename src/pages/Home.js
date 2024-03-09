import React from 'react'
import {Navbar} from '../component/Navbar'
import { Heroimg } from '../component/Heroimg'
import { Footer } from '../component/Footer'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Footer/>
    </div>
  )
}
