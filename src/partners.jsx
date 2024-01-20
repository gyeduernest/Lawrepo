import React from 'react'
import partner1 from '../src/assets/partner1.svg'
import partner2 from '../src/assets/partner2.svg'
import partner3 from '../src/assets/partner3.svg'
import partner4 from '../src/assets/partner4.svg'

export default function Partners() {
  return (
  <>
  <div className='bg-slate-50'>

  <h4 className='lg:text-4xl text-2xl text-center font-semibold'>Met our main Partners</h4>
  <div className='flex lg:gap-20 gap-4 px-40 p-20 items-center justify-center'>
      <img src={partner1} alt="" className='w-16'  />
      <img src={partner2} alt="" className='w-16' />
      <img src={partner3} alt="" className='w-16' />
      <img src={partner4} alt="" className='w-16' />

    </div>
  </div>
  </>
  )
}
