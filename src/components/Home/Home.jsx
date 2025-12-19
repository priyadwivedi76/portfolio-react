import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero'
import Cards from './Cards'
import About from '../About/About'

const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <Cards/>
      <About/>
    </div>
  )
}

export default Home