import React from 'react'
import image from '/images/image.png'
const Hero = () => {
  return (
    <div className='flex justify-center align-center w-full h-140'>
        <div className='flex flex-col justify=center align-center w-3/5 h-full py-[120px] pl-[80px]'>
          <h1 className='text-[60px] font-semibold'>I am <span className='text-[#FD8A6D]'>Priya Dwivedi</span></h1>
          <p className='text-[16px] font-semibold'>Frontend Developer</p>
          <p className='text-[22px] leading-[35px] font-light font-[600] py-6 mr-16'>
            A frontend developer and UI/UX designer passionate about creating clean, intuitive, and user-centered digital experiences.
            I design with clarity, develop with precision, and build products that feel simple, modern, and meaningful.
          </p>
          <div className='flex gap-8 py-4'>
            <button className='bg-[#FD8A6D] hover:scale-[1.12] transition ease-in-ease-out font-[600] px-6 py-2 text-[22px] text-[#1D1D37] border-2 rounded-md border-[#1D1D37]'>LinkedIN</button>
            <button className='bg-[#1D1D37] hover:scale-[1.12] transition ease-in-ease-out font-[600] px-3 py-2 text-[22px] text-[#FD8A6D] border-2 rounded-md border-[#FD8A6D]'>Download Resume</button>
          </div>
        </div>
        <div className='w-2/5 h-full'>
          <img src={image}/>
        </div> 
    </div>
  )
}

export default Hero