import Image from 'next/image'
import React from 'react'

export const Instalaciones = () => {
  return (
    <>
        <section id="about" className='w-full h-auto md:h-[600px] flex flex-col bg-orange-200'>
            <div className='w-full h-[80%] flex flex-col justify-center items-center md:flex-row '>
              
              <div className='w-1/2 h-full flex justify-center items-center mx-5'>
                  <Image loading='lazy' width={500} height={500} src="/AYG_Alta-13.webp" alt="instalaciones" className='rounded-xl'/>
              </div>
              <div className='w-full md:w-1/2 px-5 h-full flex flex-col justify-center items-center text-sm font-light my-5 ' >
                  <div className='flex flex-col justify-center items-center text-center'>
                      <span className='font-thin text-2xl text-amber-600 text-center'>Would you like time to breathe?</span>
                      <span className='font-semibold mt-5 text-4xl text-amber-800'>The focus on strength, balance & flexibility.</span>
                      <span className='font-light text-xl mt-5 text-amber-600'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat, ipsum nec.</span>
                  </div>
                  <div className='w-full h-auto grid grid-cols-3 lg:grid-cols-4 mt-10 rounded-text '>
                      <div className=' w-[100px] h-[100px] flex flex-col justify-center items-center rounded-full bg-orange-300'>
                          <span className='text-3xl text-amber-800 font-light text-center'>21+</span>
                          <span className='text-md text-amber-800 font-thin text-center'>Yoga Style Workout</span>
                      </div>
                      <div className=' w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full bg-orange-300'>
                          <span className='text-3xl text-amber-800 font-light text-center'>14+</span>
                          <span className='text-md text-amber-800 font-thin text-center'>Professionals Trainer</span>
                      </div>
                      <div className='w-[100px] h-[100px]  flex flex-col justify-center items-center rounded-full bg-orange-300'>
                          <span className='text-3xl text-amber-800 font-light text-center'>10+</span>
                          <span className='text-md text-amber-800 font-thin text-center'>Years Experience</span>
                      </div>
                  </div>
              </div>
            </div>
            
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(255 237 213)"  viewBox="0 0 1000 100" preserveAspectRatio="none" className="bg-orange-200">
            <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
            c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
            c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
        </svg>
    </>
  )
}
