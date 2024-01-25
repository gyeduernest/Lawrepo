import React from 'react'
import stuff from '../src/assets/stuff.svg'
import caseserved from '../src/assets/caseserved.png'
import love from '../src/assets/love.svg'
import star from '../src/assets/star.svg'
import History from '../src/assets/History.svg'


export default function Calltoaction() {
  return (
    <>
      <div className='lg:p-20 py-10 bg-white'>

        <h4 className='text-3xl px-10 text-center font-semibold'>
        If you're in trouble we can help.
        </h4>
        <img src={stuff} alt="" />
        <p className='text-xs text-slate-500 w-80 flex  mx-auto  text-center mb-10'>
        There are  of Lorem Ipsum available, but the majority have su alteration in some form,
         by injected humour, oir  which don't look even slightly believable.
        </p>

        <div className='lg:flex lg:gap-10 md:flex lg:justify-center lg:items-center px-7'>

          <div  className='flex w-80 mb-5 h-32 rounded-sm gap-10 items-center hover:bg-slate-800 hover:text-white bg-slate-100 text-slate-600 p-5 justify-between'>
            <div className='w-20 p-5 h-20 border rounded-full border-yellow-400  items-center flex justify-center'>
              <div>
              <img src={love} alt="" className='mx-auto' />
              <p className='text-xl'>
                6397
              </p>
              </div>

            </div>
            <div className='hover:text-white'>
                <p className='text-lg font-bold'>
                  Total clients
                </p>
                <p className='text-sm '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                
            </div>

          </div>
          
          <div  className='flex w-80 h-32 rounded-sm gap-10 items-center hover:bg-slate-800 hover:text-white bg-slate-100 text-slate-600 p-5 justify-between  mb-5'>
            <div className='w-20 p-5 h-20 border rounded-full border-yellow-400 items-center flex justify-center'>
              <div>
              <img src={star} alt="" className='mx-auto' />
              <p className='text-xl'>
                6397
              </p>
              </div>

            </div>
            <div className='hover:text-white'>
                <p className='text-lg font-bold'>
                  Total cases
                </p>
                <p className='text-sm '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              
            </div>

          </div>
          
          <div>
            <img src={caseserved} alt="" className=' h-32'/>
          </div>

        </div>
        
        <img src={History} alt="" className='mt-10' />

      </div>
    </>
  )
}
