import React from 'react'
import { faq } from '../data'
import Accordion from './Accordion'

const Faq = () => {
  const {icon, title, accordions}= faq
  return (
    <section className='my-24 max-w-[1140px] mx-auto' id='faq' >
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6'>
      <div className='flex -space-x-6 items-center justify-start md:justify-center px-4 md:px-0 lg:max-w-[540px] mx-auto mb-[50px] lg:mb-[100px]'>
        <img className='lg:hidden' src={icon} alt="" />
        <h2 className='h2 lg:mt-[100px] '>{title}<span className='text-primary-200'>.</span></h2> 
      </div>
      <div className='flex flex-col gap-y-7 px-4' data-aos='fade-up' data-aos-offset='300' data-aos-delay='200'>
        {accordions.map((accordion, idx)=>{
          return <Accordion accordion={accordion} key={idx}/>
        })}
      </div>
      </div>
    </section>
  )
}

export default Faq
