import React from 'react'
import NavSlice from './NavSlice'
import logo1 from '/images/logo1.jpg'
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
  return (
    <>
    <div className='flex justify-between align-center'>
        <div className=''>
            <img src={logo1} className='w-[72px] m-3 h-[72px] object-fit rounded-[100px]'/>
        </div>
        <div className='flex align-center text-center py-8 justify-center gap-10'>
            {NavLink.map((items)=>{
                return <NavSlice info={items}/>
            })}
        </div>
    </div>
    </>
  )
}

export default Navbar