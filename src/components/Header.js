import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { RiMenu4Fill,RiCloseFill } from 'react-icons/ri'
import logo from '../assets/img/header/logo.svg'
import NavMobile from './NavMobile'


const Header = () => {
  const [active,setActive]=useState(false)
  const [nav,setNav]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{window.scrollY > 80 ? setActive(true): setActive(false);})
  })

  return (
    <header className={`${active ? 'bg-neutral-500 py-[20px]' :'bg-transparent py-[20px]' } fixed lg:max-w-[1440px] left-0 right-0  mx-auto px-[20px] lg:px-[80px] transition-all duration-300 z-30`}> 
      <div className='flex justify-between items-center'>
      <a href="/">
          <img className='h-[35px]' src={logo} alt="" />
        </a>
        <Nav />
      <div className='lg:hidden absolute right-4'>
        {nav ? <RiCloseFill onClick={()=>setNav(!nav)} className='text-primary-200 text-3xl'/>: <RiMenu4Fill onClick={()=>setNav(!nav)} className='text-primary-200 text-3xl' /> }
        </div>
        <div className='hidden lg:flex gap-10'>
          <button className='btn-sm font-bold text-white hover:text-primary-200'>LOG IN</button>
          <button className='btn-primary px-6 btn-sm font-bold py-2 rounded-sm'>SIGN UP</button>
        </div>
        </div>
        <NavMobile nav={nav} />
       
    </header>
    
  )
}

export default Header
