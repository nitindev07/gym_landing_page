import React from 'react'

const NavMobile = ({nav}{setNav}) => {
  return (
    <div onClick={()=>setNav(!nav)} className={`lg:hidden bg-neutral-500 w-full h-0 transition-all fixed ${ nav ? 'min-h-screen': 'min-h-0'} overflow-hidden top-0 left-0 right-0 -bottom-12 duration-300 -z-10 `}>
        <div className='h-full flex flex-col items-center justify-center'>
        <ul className='flex flex-col text-body-md items-center w-full justify-center text-white gap-8 mb-14'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#workout">Workouts</a></li>
          <li><a href="#pricing">Pricing</a></li>
          
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className='flex justify-center gap-16'>
          <button className='btn-lg font-bold text-white'>LOG IN</button>
          <button className='btn-primary px-6 btn-lg font-bold py-2 rounded-sm'>SIGN UP</button>
        </div>
        </div>
    </div>
  )
}

export default NavMobile
