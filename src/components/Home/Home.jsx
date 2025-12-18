import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero'
import Cards from './Cards'

const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <Cards/>
    </div>
  )
}

export default Home