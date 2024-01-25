import React from 'react'
import stuff from '../src/assets/stuff.svg'
import Business from '../src/assets/Business.svg'
import Familylaw from '../src/assets/Familylaw.svg'
import Construction from '../src/assets/Construction.svg'
import Wrongfuldeath from '../src/assets/Wrongfuldeath.svg'
import criminal from '../src/assets/criminal.svg'
import Caraccident from '../src/assets/Caraccident.svg'

export default function Practiceareas() {
  return (
    <>
      <div className='md:w-full  bg-slate-900 lg:py-10 py-10 '>
      <div className='lg:flex  lg:px-40 lg:p-20 lg:justify-between lg:items-center'>
      <div>
        <h3 className='text-3xl text-center px-10 text-white mb-3 font-semibold'>
        Explore Our Practice Arease
        </h3>
        <img src={stuff} alt="" className='ml-10' />
      </div>
      <div className='text-[#D1B06B] text-sm lg:w-96 px-10 text-center '>
      There are many variations of passages of Lorem Ipsum available,
       but the majority have su alteration in some form.
      </div>

    </div>

    <div className='lg:flex-wrap lg:gap-8 lg:px-40 lg:flex py-10 md:grid md:grid-cols-2 md:px-40 md:gap-16 px-7'>
    
    <div className='p-5 w-80 h-56 bg-slate-800 rounded-md mb-5'>
      <h4 className=' text-yellow-500 mb-5 text-xl font-bold'>
      Business Law
      </h4>
      <p className='text-sm text-slate-200  mb-5'>
      There are many variations of passages
of Lorem Ipsum available, but majority 
going to use a passage.
      </p>
      <hr className='mb-3 mt-2 bg-slate-300' />
      <div className='flex justify-between items-center'>
        <img src={Business} alt="" className='w-10 h-10' />
       

      </div>
    </div>
    <div className='p-5 w-80 h-56 bg-slate-800 rounded-md mb-5'>
      <h4 className=' text-yellow-500 mb-5 text-xl font-bold'>
      Trust Fund Counselling
      </h4>
      <p className='text-sm text-slate-200  mb-5'>
      There are many variations of passages
of Lorem Ipsum available, but majority 
going to use a passage.
      </p>
      <hr className='mb-3 mt-2 bg-slate-300' />
      <div className='flex justify-between items-center'>
        <img src={Familylaw} alt="" className='w-10 h-10' />
        

      </div>
    </div>
    <div className='p-5 w-80 h-56 bg-slate-800 rounded-md mb-5'>
      <h4 className=' text-yellow-500 mb-5 text-xl font-bold'>
      Construction Law
      </h4>
      <p className='text-sm text-slate-200  mb-5'>
      There are many variations of passages
of Lorem Ipsum available, but majority 
going to use a passage.
      </p>
      <hr className='mb-3 mt-2 bg-slate-300' />
      <div className='flex justify-between items-center'>
        <img src={Construction} alt="" className='w-10 h-10' />

      </div>
    </div>
    <div className='p-5 w-80 h-56 bg-slate-800 rounded-md mb-5'>
      <h4 className=' text-yellow-500 mb-5 text-xl font-bold'>
      Wrongful death
      </h4>
      <p className='text-sm text-slate-200  mb-5'>
      There are many variations of passages
of Lorem Ipsum available, but majority 
going to use a passage.
      </p>
      <hr className='mb-3 mt-2 bg-slate-300' />
      <div className='flex justify-between items-center mb-5'>
        <img src={Wrongfuldeath} alt="" className='w-10 h-10' />

      </div>
    </div>
    <div className='p-5 w-80 h-56 bg-slate-800 rounded-md mb-5'>
      <h4 className=' text-yellow-500 mb-5 text-xl font-bold'>
      Criminal Law
      </h4>
      <p className='text-sm text-slate-200  mb-5'>
      There are many variations of passages
of Lorem Ipsum available, but majority 
going to use a passage.
      </p>
      <hr className='mb-3 mt-2 bg-slate-300' />
      <div className='flex justify-between items-center'>
        <img src={criminal} alt="" className='w-10 h-10' />        
           </div>
    </div>
    <div className='p-5 w-80 h-56 bg-slate-800 rounded-md mb-5'>
      <h4 className=' text-yellow-500 mb-5 text-xl font-bold'>
      Car Accident
      </h4>
      <p className='text-sm text-slate-200  mb-5'>
      There are many variations of passages
of Lorem Ipsum available, but majority 
going to use a passage.
      </p>
      <hr className='mb-3 mt-2 bg-slate-300' />
      <div className='flex justify-between items-center'>
        <img src={Caraccident} alt="" className='w-10 h-10' />

      </div>
    </div>
    </div>
      </div>
    </>
  )
}
