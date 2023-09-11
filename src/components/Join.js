import React from 'react'
import hhh from '../assets/img/join/woman.png'
import { join } from '../data'

const Join = () => {
  return (
    <section className='mt-24 relative pt-24 w-full'>
      <div className='bg-neutral-500 lg:h-[670px] h-[575px] ' >
        <div className='flex w-full md:flex-row flex-col lg:w-[1240px]  mx-auto -space-y-24 md:space-y-20 items-center justify-start md:justify-center  md:-space-x-12 space-x-0  absolute top-0'>
          <div className='mr-28 md:mr-0 ' data-aos='fade-right' data-aos-offsrt='300' data-aos-delay='200'><img src={hhh} alt="" /></div>
          <div className='text-white flex flex-col md:gap-8 gap-5 items-start lg:max-w-[500px] max-w-[350px] z-10' data-aos='fade-left' data-aos-offsrt='300' data-aos-delay='200'>
            <h2 className='h1 text-white md:max-w-[400px] max-w-[300px]'>Wanna join <span className='text-primary-200'>&</span> have fun?</h2>
            <p className='md:text-body-md text-body-sm lg:max-w-[470px] max-w-[330px]'>{join.subtitle}</p>
            <button className='btn-lg bg-white text-neutral-500'>Join now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join
