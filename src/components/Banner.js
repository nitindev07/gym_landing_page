import React from 'react'


const Banner = () => {
  return (
    <section className='bg-neutral-500 w-full mx-auto h-[90vh]'>
    <div className='flex justify-center md:-space-x-16 -space-x-48 h-full container mx-auto'>
      <div className='text-white max-w-[550px] flex flex-col justify-center pl-4 lg:pl-0 items-start flex-1  z-10'> 
        <h1 className='h1 text-white mb-10 ' data-aos='fade-down' data-aos-delay='300'>Get the Best Part of your day <br /><span className='text-primary-100'>-you fit here.</span> </h1>
        <p className='mb-10 md:text-[24px] text-[19px]  max-w-[430px]' data-aos='fade-down' data-aos-delay='400'>We provide serious fitness but within a fun and freindly, safe space.</p>
        <button className='btn-secondary btn-lg' data-aos='fade-down' data-aos-delay='500'>JOIN NOW</button>
      </div>
      <div className='w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1' data-aos='fade-right' data-aos-delay='300'>
      </div>
    </div>
    </section>
  )
}

export default Banner
