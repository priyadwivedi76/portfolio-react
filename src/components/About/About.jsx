import React from 'react'
import Left from './left'
import Right from './Right'
const About = () => {
  return (
    <div className='lg:min-h-[90vh] md:min-h-[70vh] min=h-[50vh] w-full flex lg:flex-row md:flex-row flex-col my-10'>
      <Left/>
      <Right/>
    </div>
  )
}

export default About