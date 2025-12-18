import React, { useEffect, useState } from 'react'
import NavSlice from './NavSlice'
import logo1 from '/images/logo1.jpg'
import MenuList from '../Home/MenuList.jsx'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const NavLink=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'Tools',
            path:'/tools'
        },
        {
            title:'Project',
            path:'/projects'
        },
        {
            title:'Contact',
            path:'/contact'
        }
    ]

    const [openMenu,setOpenMenu]=useState(false);

    const handleClick=()=>{
        setOpenMenu((prev)=>!prev)
    }

    useEffect(()=>{
        console.log(openMenu)
    },[openMenu])

  return (
    <>
    <div className='flex justify-between w-full h-[10vh] lg:gap-[140px] md:gap-[60px] gap-5  items-center'>
        <div className='logo'>
            <img src={logo1} className='w-full h-full rounded-[50px] object-contain'/>
        </div>
        <div className='lg:flex md:flex hidden items-center justify-center text-center lg:py-8 md:py-4 py-2 md:gap-4 lg:gap-10'>
            {NavLink.map((items)=>{
                return <NavSlice info={items}/>
            })}
        </div>

        {/* hamburger for menu */}
        <div className='lg:hidden md:hidden flex'>
            <button onClick={()=>handleClick()}>
                <FaBars/>
            </button>
            {openMenu && 
            <>
            <MenuList data={NavLink} setOpenMenu={setOpenMenu}/>
            </>
            }
        </div>
    </div>
    </>
  )
}

export default Navbar