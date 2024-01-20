import React from 'react'
import stuff from '../src/assets/stuff.svg'
import quote from '../src/assets/quote.svg'
import Reeves from '../src/assets/Reeves.png'
import Mister from '../src/assets/Mister.png'
import Nick from '../src/assets/Nick.png'
import Pat from '../src/assets/Pat.png'


export default function Testimonials() {
  return (
    <>
      <div className='bg-[#1F2732] lg:p-20 py-10'>
          <h3 className='text-3xl text-white text-center font-semibold'>
          Client and their Testimonals
          </h3>
          <img src={stuff} alt="" />

          <div className='lg:flex px-10 items-center justify-center'>
          <div className='p-10 '>
                <div className='p-10 bg-[#2E3947] w-56 h-56 rounded-bl-lg mb-4'>
                  <img src={quote} alt="" />
                  <p className='text-white'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className='flex items-center text-white gap-4'>
                  <img src={Reeves} alt="" className='rounded-full border-4 w-20 h-20 border-slate-50' />
                  <div>
                    <p className='font-semibold text-md'>
                    Name of person
                    </p>
                  <p className='text-xs font-thin'>
                    Consultant
                  </p>

                  </div>
                </div>
          </div>
          <div className='p-10 '>
                <div className='flex items-center text-white gap-4'>
                  <img src={Mister} alt="" className='rounded-full border-4 w-20 h-20 border-slate-50' />
                  <div>
                    <p className='font-semibold text-md'>
                    Name of person
                    </p>
                  <p className='text-xs font-thin'>
                    Consultant
                  </p>
                  </div>
                </div>
                <div className='p-10 bg-[#2E3947] w-56 h-56 rounded-tl-lg'>
                  <img src={quote} alt="" />
                  <p className='text-white'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
          </div>
          <div className='p-10 '>
                <div className='p-10 bg-[#2E3947] w-56 h-56 rounded-bl-lg mb-4'>
                  <img src={quote} alt="" />
                  <p className='text-white'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className='flex items-center text-white gap-4'>
                  <img src={Nick} alt="" className='rounded-full border-4 w-20 h-20 border-slate-50' />
                  <div>
                    <p className='font-semibold text-md'>
                    Name of person
                    </p>
                  <p className='text-xs font-thin'>
                    Consultant
                  </p>

                  </div>
                </div>
          </div>
          <div className='p-10 '>
                <div className='flex items-center text-white gap-4'>
                  <img src={Pat} alt="" className='rounded-full border-4 w-20 h-20 border-slate-50' />
                  <div>
                    <p className='font-semibold text-md'>
                    Name of person
                    </p>
                  <p className='text-xs font-thin'>
                    Consultant
                  </p>
                  </div>
                </div>
                <div className='p-10 bg-[#2E3947] w-56 h-56 rounded-tl-lg'>
                  <img src={quote} alt="" />
                  <p className='text-white'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
          </div>

          </div>
    </div>
    </>
  )
}
