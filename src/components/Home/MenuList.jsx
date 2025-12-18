import React from 'react'
import { Link } from 'react-router-dom'
import { FaXmark } from 'react-icons/fa6'

const MenuList = ({data,setOpenMenu}) => {
    const handleClick=()=>{
        setOpenMenu((prev)=>!prev)
    }

  return (
    <div className='absolute flex gap-5 justify-start py-10 items-center  left-0 right-0 top-0 bottom-0 h-full w-full bg-[#1D1D37] flex flex-col justify-center items-start text-slate-900'>
        <div className='absolute top-5 right-5 text-white'>
           <FaXmark onClick={()=>handleClick()} className="text-2xl cursor-pointer" />
        </div>
        {data.map((item)=>(
            <Link to={item.path} className='text-md font-[400] w-[87%] rounded-md mx-5 text-white px-2 py-2'>
            {item.title}
            </Link>
        ))}
    </div>
  )
}

export default MenuList