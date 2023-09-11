import React from 'react'
import icons from '../assets/img/workouts/icons/calendar.svg'
import WorkoutSlider from './WorkoutSlider'

const Workouts = () => {
  return (
    <div className='w-full my-24' id='workout' >
      <div className='flex -space-x-20 items-center justify-center mb-16' data-aos='fade-up' data-aos-delay='200'>
        <img src={icons} alt="" />
        <h1 className='h2 font-primary'>Traing Programs<span className='text-primary-200'>.</span> </h1>
      </div>
      <div data-aos='fade-up' data-aos-delay='200'><WorkoutSlider /></div>
      
    </div>
  )
}

export default Workouts
