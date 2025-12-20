import React from 'react'
import { iconsImg } from './icons2'
import { Card } from '../Home/Cards'

const Tools = () => {
    const ToolsData=[
        {
            title:'HTML',
            src:iconsImg.Html,

        },
        {
            title:'CSS',
            src:iconsImg.Css
        },
        {
            title:'JavaScript',
            src:iconsImg.Js
        },
        {
            title:'React',
            src:iconsImg.React
        },
        {
            title:'Github',
            src:iconsImg.Github
        },
        {
            title:'Figma',
            src:iconsImg.Figma
        },
        {
            title:'Framer',
            src:iconsImg.Framer
        },
        {
            title:'Canva',
            src:iconsImg.Canva
        },
    ]
  return (
    <>
    <h1 className='lg:text-[60px] md:text-[33px] text-[22px] text-center font-[700] text-[#FD8A6D] my-10'>Tools and Technology</h1>
    <div className='lg:min-h-[50vh] md:min-h-[40vh] min-h-[90vh] w-full flex lg:flex-row md:flex-row flex-col flex-wrap lg:gap-10 md:gap-6 gap-4 lg:px-30 md:px-16 px-10 justify-center items-center pb-10'>
       {ToolsData.map((items)=>{
        return <>
            <ToolCard info={items}/>
        </>
         
       })}
    </div>
    </>
  )
}

export const ToolCard=({info})=>{
    const {title,src}=info;
            
    return(
        <>
        <div className='lg:min-h-[25vh] lg:px-10 md:px-5 px-3 md:min-h-[18vh] h-[16vh] flex flex-col justify-center items-center lg:w-[15vw] md:w-[14vw] w-[40vw] bg-[#2c2c43] rounded-lg hover:scale-[1.15] transition ease-in-ease-out'>
            {src && <img className='w-[50px] h-[50px] object-cover' src={src}/>}
            <h1 className='lg:text-[28px] md:text-[15px] text-[12px] font-semibold lg:py-3 md:py-2 py-1'>{title}</h1>
        </div>
        </>
    )
}

export default Tools