import React from 'react'
import { pricing } from '../data'
import PlanList from './PlanList'
const Pricing = () => {
  return (
    <div className='my-12' id='pricing'>
      <div className='flex justify-center items-center mb-28 -space-x-20' data-aos='fade-up' data-aos-delay='200' data-aos-offset='200'>
        <img src={pricing.icon} alt="" />
        <h2 className='h1'>{pricing.title}<span className='text-primary-200'>.</span></h2>
      </div>
      <PlanList plan={pricing.plans}/>
    </div>
  )
}

export default Pricing
