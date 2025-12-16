import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='container justify-center items-center gap-20'>
      <Navbar/>
      <Hero className='mt-[10vh]'/>
    </div>
  )
}

export default Home