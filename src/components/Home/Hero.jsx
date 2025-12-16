import React from 'react'
import image from '/images/image.png'
const Hero = () => {
  const primaryBtn='bg-[#FD8A6D] hover:scale-[1.12] transition ease-in-ease-out font-[600] px-3 py-2 lg:text-[22px] md:text-[12px] text-[12px] text-[#1D1D37] border-2 rounded-md border-[#1D1D37]'
  const secondaryBtn='bg-[#1D1D37] hover:scale-[1.12] transition ease-in-ease-out font-[600] px-3 py-2 lg:text-[22px] md:text-[12px] text-[12px] text-[#FD8A6D] border-2 rounded-md border-[#FD8A6D]'
  return (
    <div className='flex lg:flex-row md:flex-row bg-red-500 flex-col justify-center items-start min-h-[90vh] w-full'>
        <div className='flex flex-col justify-center items-start lg:w-3/5 md:w-3/5 w-full h-full lg:py-[120px] md:py-[60px] py-[20px] lg:pl-[80px] md:pl-[40px] pl-[20px]'>
          <h1 className='lg:text-[54px] md:text-[30px] text-[22px] font-semibold'>I am <span className='text-[#FD8A6D]'>Priya Dwivedi</span></h1>
          <p className='text-[16px] font-semibold'>Frontend Developer</p>
          <p className='lg:text-[22px] md:text-[12px] text-[12px] lg:leading-[35px] md:leading-[25px] leading-[20px] font-light font-[600] lg:py-6 md:py-4 py-2 lg:mr-16 md:mr-8 mr-4'>
            A frontend developer and UI/UX designer passionate about creating clean, intuitive, and user-centered digital experiences.
            I design with clarity, develop with precision, and build products that feel simple, modern, and meaningful.
          </p>
          <div className='flex lg:gap-8 md:gap-4 gap-2 lg:py-4 md:py-2 py-1'>
            <button className={`${primaryBtn}`}>LinkedIN</button>
            <button className={`${secondaryBtn}`}>Download Resume</button>
          </div>
        </div>
        <div className='lg:w-2/5 md:w-2/5 w-full lg:h-full md:h-full h-[50%]'>
          <img src={image} className='w-full h-full object-contain'/>
        </div> 
    </div>
  )
}

export default Hero