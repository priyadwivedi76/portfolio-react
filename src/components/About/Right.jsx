import React from 'react'

const Right = () => {
     const primaryBtn='bg-[#FD8A6D] lg:w-[16vw] md:w-[16vw] w-[32vw] hover:scale-[1.08] transition ease-in-ease-out font-[600] px-3 py-2 lg:text-[22px] md:text-[14px] text-[12px] text-[#1D1D37] border-2 rounded-md border-[#1D1D37]'
    const hoverDetail='lg:text-[20px] lg:w-[25vw] md:w-[25vw] w-[40vw] md:text-[14px] text-[12px] font-[300] opacity-[70%] transition hover:scale-[1.05] hover:opacity-[100%]'
  return (
    <div className=' lg:h-[90vh] md:h-[60vh] lg:w-3/5 md:w-3/5 w-full flex flex-col gap-1 justify-center items-start px-3 py-2'>
        <p className='lg:text-[18px] md:text-[14px] text-[12px] font-semibold'>Who am i?</p>
        <h1 className='lg:text-[48px] md:text-[16px] text-[16px] font-[700] font-[700]'>I am <span className='text-[#FD8A6D]'>Frontend Developer</span> and UI/UX <span className='text-[#FD8A6D]'>Designer</span></h1>
        <p className='lg:text-[24px] md:text-[14px] text-[12px] font-[400] opacity-[80%] lg:pb-8 md:pb-6 pb-4 border-b-2 border-white'>I’m a frontend developer and UI/UX designer with a passion for solving problems through design and clean code. My work focuses on intuitive interfaces, responsive development, and creating products that offer real value to users.
        I enjoy working across the full process—research, design, prototyping, and development—to deliver complete, polished digital solutions.</p>
        <div className='grid grid-cols-2 lg:px-5 md:px-2 px-1 lg:py-5 md:py-3 py-1 lg:gap-6 md:gap-4 gap-2'>
            <p className={`${hoverDetail}`}><span className='font-[600]'>Name: </span>Priya Dwivedi</p>
            <p className={`${hoverDetail}`}><span className='font-[600]'>From: </span>Bihar</p>
            <p className={`${hoverDetail}`}><span className='font-[600]'>Age: </span>22</p>
            <p className={`${hoverDetail}`}><span className='font-[600]'>Education: </span>Btech CSE</p>
             <button className={`${primaryBtn}`}>Download CV</button>
        </div>
       
        {/* <div className='flex px-20 py-5 justify-between items-center'>
            <p className='lg:text-[20px] md:text-[18px] text-[16px] font-[300] opacity-[70%] transition hover:scale-[1.09] hover:opacity-[100%]'><span className='font-[400]'>Name: </span>Priya Dwivedi</p>
            <p className='lg:text-[20px] md:text-[18px] text-[16px] font-[300] opacity-[70%] transition hover:scale-[1.09] hover:opacity-[100%]'><span className='font-[400]'>From: </span>Bihar</p>
        </div>
        <div className='flex px-20 py-5 justify-between items-center'>
            <p className='lg:text-[20px] md:text-[18px] text-[16px] font-[300] opacity-[70%] transition hover:scale-[1.09] hover:opacity-[100%]'><span className='font-[400]'>Email: </span>priyadwivedi7668@gmail.com</p>
            <p className='lg:text-[20px] md:text-[18px] text-[16px] font-[300] opacity-[70%] transition hover:scale-[1.09] hover:opacity-[100%]'><span className='font-[400]'>Age: </span>22</p>
        </div> */}
    </div>
  )
}

export default Right