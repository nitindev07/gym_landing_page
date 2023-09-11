import React from 'react'


const Nav = () => {
  return (
    <div className=''>
      
        
        <ul className='hidden font-semibold text-white lg:flex items-center gap-8'>
          <li><a className='hover:text-primary-200' href="/">Home</a></li>
          <li><a className='hover:text-primary-200' href="#about">About</a></li>
          <li><a className='hover:text-primary-200' href="#workout">Workouts</a></li>
          <li><a className='hover:text-primary-200' href="#pricing">Pricing</a></li>
          <li><a className='hover:text-primary-200' href="#faq">FAQ</a></li>
        </ul>
        

       
      
    </div>
  )
}

export default Nav
