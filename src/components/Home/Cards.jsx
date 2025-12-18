import React from 'react'
import { icons } from './icons'

const Cards = () => {
    const CardData=[
        {
            id:1,
            icon:'accessibility',
            title:'Adaptability',
            desciption:'Quick to learn, adjust, and perform well in changing environments or project demands.'
        },
        {
            id:2,
            icon:'communication',
            title:'Communication',
            desciption:'Able to express ideas clearly, listen actively, and collaborate smoothly with teams or clients.'
        },
        {
            id:3,
            icon:'creativity',
            title:'Creativity',
            desciption:'Brings fresh perspectives and innovative ideas to solve problems and enhance experiences.'
        },
    ]

  return (
    <div className='lg:min-h-[50vh] md:min-h-[35vh] min-h-[80vh] flex lg:flex-row md:flex-row flex-col items-center justify-evenly'>
        {CardData.map((items)=>{
            return <Card info={items} />
        })}
    </div>
  )
}

export const Card=({info})=>{
    const {icon,title,desciption,id}=info;
    const Icon=icons[icon]
            
    return(
        <>
        <div className='lg:min-h-[35vh] lg:px-10 md:px-5 px-3 md:min-h-[30vh] h-[25vh] flex flex-col justify-center items-center lg:w-[23vw] md:w-[27vw] w-[60vw] bg-[#2c2c43] rounded-lg hover:scale-[1.1] transition ease-in-ease-out'>
            {Icon && <Icon className='lg:h-[80px] lg:w-[80px] md:h-[40px] md:w-[40px] h-[40px] w-[40px] text-[#B3887E]'/>}
            <h1 className='lg:text-[28px] md:text-[18px] text-[16px] font-semibold lg:py-3 md:py-2 py-1'>{title}</h1>
            <p className='lg:text-[14px] md:text-[12px] text-[10px] text-center opacity-[80%]'>{desciption}</p>
           
        </div>
        </>
    )
}

export default Cards