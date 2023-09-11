import React from 'react'
import { footer } from '../data'

const Footer = () => {
  return (
    <footer className='bg-neutral-500 py-2'>
      <div className='max-w-[1140px] bg-neutral-500 mx-auto py-5 px-4 lg;px-0'>
          <div className='flex justify-between items-center'>
            <img className='md:w-[100px] w-[60px]' src={footer.logo} alt="" />
            <p className='text-body-sm'>{footer.copyrightText}</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
