import React from 'react'
import Left from './left'
import Right from './Right'
const About = () => {
  return (
    <>
    <div className='lg:min-h-[90vh] md:min-h-[70vh] min=h-[50vh] w-full mt-10'>
      <h1 className='lg:text-[60px] md:text-[33px] text-[22px] text-center font-[700] text-[#FD8A6D] my-10'>About</h1>
      <div className='flex lg:flex-row md:flex-row flex-col'>
        <Left/>
        <Right/>
      </div>
    </div>
    </>
  )
}

export default About