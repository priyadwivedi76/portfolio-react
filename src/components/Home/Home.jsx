import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero'
import Cards from './Cards'
import About from '../About/About'
import Tools from '../Tools/Tools'
const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <Cards/>
      <About/>
      <Tools/>
    </div>
  )
}

export default Home