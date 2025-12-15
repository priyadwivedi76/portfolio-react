import React from 'react'
import { Link } from 'react-router-dom';

const NavSlice = ({info}) => {
  const {title,path}=info;
  return (
    <>
    <Link to={path}>
      <div className='font-semibold p-2 text-gray-400 text-[20px] hover:text-[#FD8A6D] hover:scale-[1.2] duration transition ease-in-ease-out'>
        {title}
      </div>
    </Link>
    </>
  )
}

export default NavSlice