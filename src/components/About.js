import React from 'react'
import { about } from '../data'
import icon from '../assets/img/about/icons/users-icn.svg'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const About = () => {
  return (
    <section className='w-full h-full mx-auto lg:my-28 my-20 lg:px-0 px-4' id='about'>
    <div className='max-w-[790px] mx-auto flex flex-col items-start gap-16 p-4 md:p-0 '>
      <div className='flex items-center -space-x-20' data-aos='fade-up' data-aos-delay='100'> 
        <div>
          <img src={icon} alt="" />
        </div>
        <div className='h2 font-primary text-neutral-500'>
          {about.title}<span className='text-primary-200'>.</span>
        </div>
      </div>
      <div className=' md:text-body-md' data-aos='fade-up' data-aos-delay='200'>
        {about.subtitle1}
      </div>
      <div className='md:text-body-md' data-aos='fade-up' data-aos-delay='300'>
        {about.subtitle2}
      </div>
      <button className='link flex gap-2 hover:gap-5 transition-all items-center' data-aos='fade-up' data-aos-delay='400'>
        <a href="/">{about.link}</a>
        <IoIosArrowDroprightCircle className='text-2xl'/>
      </button>
    </div>
    </section>
  )
}

export default About
