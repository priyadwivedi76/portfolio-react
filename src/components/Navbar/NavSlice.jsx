import React from 'react'
import { Link } from 'react-router-dom';

const NavSlice = ({info}) => {
  const {title,path}=info;
  return (
    <>
    <Link to={path}>
      <div className='font-semibold lg:p-2 md:p-1 text-gray-400 lg:text-[20px] md:text-[15px] hover:text-[#FD8A6D] hover:scale-[1.2] duration transition ease-in-ease-out'>
        {title}
      </div>
    </Link>
    </>
  )
}

export default NavSlice