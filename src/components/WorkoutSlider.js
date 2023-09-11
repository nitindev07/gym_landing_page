import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { workouts } from '../data'
import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css'
import { Navigation } from 'swiper';

const WorkoutSlider = () => {
  const {programs}=workouts
  return (
    <Swiper slidesPerView={2} spaceBetween={32} navigation={true}
    breakpoints={{
      768:{
        slidesPerView:3
      },
      1024:{
        slidesPerView:4
      }
    }}
    // done this form first time
    modules={[Navigation]}
    className='workoutSlider'
    >
      {programs.map((programs,index) =>{
        return <SwiperSlide key={index} className='max-w-[320px] max-h-[320px] relative'>
          <img className='w-full h-full object-cover' src={programs.image} alt="" />
          <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px] font-primary font-semibold text-sm text-neutral-500'>{programs.name}</div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}

export default WorkoutSlider
