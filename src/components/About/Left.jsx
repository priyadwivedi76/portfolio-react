import React from 'react'
import webDev from '/images/webDev.png'
const Left = () => {
  return (
    <div className=' lg:h-[90vh]  md:h-[60vh] h-[50vh] flex justify-center items-center lg:w-2/5 md:w-2/5 w-full'>
       <div className='h-[93%] w-[95%]'>
        <img src={webDev} className='w-full h-full object-cover'/>
       </div>
    </div>
  )
}

export default Left