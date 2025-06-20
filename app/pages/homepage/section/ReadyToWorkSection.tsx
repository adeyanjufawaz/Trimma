import { miniBalls } from '@/public/img'
import Image from 'next/image'
import React from 'react'

function ReadyToWorkSection() {
  return (
    <div className='flex relative justify-between items-center p-4 bg-black h-24 md:h-34 mt-10 rounded-2xl '>
        <Image src={miniBalls} alt='miniBalls' className='absolute left-[10%] -bottom-[2%] w-10 h-10 md:w-16 md:h-16'/>
        <Image src={miniBalls} alt='miniBalls' className='absolute top-[35%] left-[40%] md:left-[60%] w-10 h-10 md:w-16 md:h-16'/>
        <Image src={miniBalls} alt='miniBalls' className='absolute top-[15%] right-3 w-10 h-10 md:w-16 md:h-16'/>
        <p className='text-sm md:text-4xl lg:text-5xl text-white font-semibold'>Ready to work with us ?</p>
        <button className='bg-pry-dark font-medium py-2 px-5 md:px-10 text-white text-sm md:text-base rounded-full'>Connect now</button>
    </div>
  )
}

export default ReadyToWorkSection