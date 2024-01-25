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

          <div className='lg:flex px-10 items-center md:grid md:grid-cols-2 justify-center'>
          <div className='p-10 '>
                <div className='px-5 text-sm bg-[#2E3947] w-56 h-56 rounded-bl-lg mb-4'>
                  <img src={quote} alt="" />
                  <p className='text-white'>
                  "Their knowledge of family law and trust fund matters is unparalleled. They guided us through a challenging situation with professionalism and achieved an outcome that exceeded our expectations."
                  </p>
                </div>
                <div className='flex items-center text-white gap-4'>
                  <img src={Reeves} alt="" className='rounded-full border-4 w-20 h-20 border-slate-50' />
                  <div>
                    <p className='font-semibold text-md'>
                    Jimmy Carter
                    </p>
                  <p className='text-xs font-thin'>
                    Planning Consultant
                  </p>

                  </div>
                </div>
          </div>
          <div className='p-10 '>
                <div className='flex items-center text-white gap-4'>
                  <img src={Mister} alt="" className='rounded-full border-4 w-20 h-20 border-slate-50' />
                  <div>
                    <p className='font-semibold text-md'>
                    Mary Anne
                    </p>
                  <p className='text-xs font-thin'>
                    Widow
                  </p>
                  </div>
                </div>
                <div className='px-5 text-sm bg-[#2E3947] w-56 h-56 rounded-tl-lg'>
                  <img src={quote} alt="" />
                  <p className='text-white'>
                  The attorneys navigated our family through a complex trust fund matter with expertise and compassion. Their dedication to achieving the best outcome for our family was truly remarkable.                  </p>
                </div>
          </div>
          <div className='p-10 '>
                <div className='px-5 text-sm bg-[#2E3947] w-56 h-56 rounded-bl-lg mb-4'>
                  <img src={quote} alt="" />
                  <p className='text-white'>
                  In times of wrongful death, having a compassionate and skilled legal team is crucial. [Law Firm Name] provided unwavering support, ensuring justice for our loved one. Their commitment to our case was evident every step of the way                  </p>
                </div>
                <div className='flex items-center text-white gap-4'>
                  <img src={Nick} alt="" className='rounded-full border-4 w-20 h-20 border-slate-50' />
                  <div>
                    <p className='font-semibold text-md'>
                      Marilyn Owens
                    </p>
                  <p className='text-xs font-thin'>
                    Widow
                  </p>

                  </div>
                </div>
          </div>
          <div className='p-10 '>
                <div className='flex items-center text-white gap-4'>
                  <img src={Pat} alt="" className='rounded-full border-4 w-20 h-20 border-slate-50' />
                  <div>
                    <p className='font-semibold text-md'>
                    Natalia Webber
                    </p>
                  <p className='text-xs font-thin'>
                    Widow
                  </p>
                  </div>
                </div>
                <div className='px-5 text-sm bg-[#2E3947] w-56 h-56 rounded-tl-lg'>
                  <img src={quote} alt="" />
                  <p className='text-white'>
                  Navigating the complexities of family law can be overwhelming, they made the process seamless. From trust fund matters to child custody.
                                                      </p>
                </div>
          </div>

          </div>
    </div>
    </>
  )
}
