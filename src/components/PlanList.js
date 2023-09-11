import React, { useState } from 'react'

import {BsCheckCircleFill} from 'react-icons/bs'

const PlanList = ({plan}) => {
  const[black,setBlack]=useState(0)
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 my-8 max-w-[1240px] h-full mx-auto' data-aos='fade-up' data-aos-delay='300' data-aos-offset='200'>
      {plan.map((plan,idx)=>{
        const {list} = plan
        return (
          <div key={idx} className='w-full h-full md:max-w-[620px] lg:max-w-[405px] rounded-md px-4 lg:min-h-[550px] pb-9 mx-auto' onClick={()=> setBlack(idx)} >
          <div  className={`flex md:flex-col flex-row gap-4 h-full justify-center items-center px-4 py-12 ${idx === black ? 'bg-neutral-500 text-white md:scale-110': ' bg-neutral-400/10 text-neutral-500'} duration-300`}>
            <div className='text-center mx-auto  py-5 md: md:mb-2 mb-0'>
            <div className={`${idx === black ? 'bg-white text-neutral-500':'bg-neutral-500 text-white'} py-1 px-2 font-semibold md:mb-8 mb-5`}>{plan.name}</div>
            <p  className='text-6xl font-bold'>{plan.price}<span className='text-4xl'>$</span></p>
            <p>/month</p>
            </div>
            <div className='flex flex-col gap-2'>
              <ul className='py-0'>
                {list.map((item, index)=>{
                  return <li key={index} className='flex items-center justify-start gap-2 mb-6'>
                  <BsCheckCircleFill/>
                  {item.name}</li>
                })}
              </ul>
              <button className={`${idx === black ? 'bg-white border-2 text-neutral-500':'border-neutral-500 border-2 text-neutral-500'} font-semibold btn-sm max-w-[450px] rounded-sm mx-auto`}>Join now</button>

            </div>
          </div>
          </div>
          )
      })}
    </div>
  )
}

export default PlanList
