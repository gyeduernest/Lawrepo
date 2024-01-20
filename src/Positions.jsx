import React from 'react'
import Civil from '../src/assets/Civil.jpg'
import Attorneycriminal from '../src/assets/Attorneycriminal.jpg'
import Senior from '../src/assets/Senior.jpg'
import stuff from '../src/assets/stuff.svg'



export default function Positions() {
  return (
    <div className='lg:p-20 py-10'>
      <h4 className='lg:text-3xl px-10 text-xl font-medium lg:px-96 flex items-center justify-center text-center'>
      Our Experienced Attorney Are Ready
 To answer any questions
      </h4>
      <img src={stuff} alt=""  className='flex'/>
      <div className='lg:flex gap-8  px-10 justify-center items-center'>
        <div className='mb-10'>  
        <img src={Civil} alt="" className='w-72 h-96' />
        <p>
          Micheal Crawley
        </p>
        <p>
          Finance Attorney
        </p>
        <p className='text-slate-400'>
          Michealcrawley@gmail.com
        </p>
        </div>
        <div className='mb-10'>  
        <img src={Attorneycriminal} alt="" className='w-72 h-96' />
        <p>
          Daniel Regha
        </p>
        <p>
          Civil Attorney
        </p>
        <p className='text-slate-400'>
          DanielRegha@gmail.com
        </p>
        </div>
        <div>  
        <img src={Senior} alt="" className='w-72 h-96' />
        <p>
          Davina Marshamew
        </p>
        <p>
          Civil Attorney
        </p>
        <p className='text-slate-400'>
          DavinaMarshamew@gmail.com
        </p>
        </div>

      </div>
    </div>
  )
}
