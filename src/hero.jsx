import React from 'react'
import Heroimage from "../src/assets/Heroimage.png"
import stuff from "../src/assets/stuff.svg"
import Bang from "../src/assets/Bang.png"
import Man from "../src/assets/Man.png"
import Belowhero from "../src/assets/Belowhero.png"
import Bookpen from "../src/assets/Bookpen.svg"
import thirtyfive from "../src/assets/thirtyfive.svg"

export default function Hero() {
  return (
<>
    <div className='lg:flex' style={{ backgroundImage: `url('../src/assets/Herobgphoto.png')` }}>
          <div className=' lg:p-10 lg:px-20 py-10'>
            <img src={stuff} alt="" className='' />
            <h4 className='lg:text-5xl text-white font-semibold text-3xl text-center'>
            Deeper Understanding
              Better Solutions
            </h4>
            <p className='text-[#D1B06B] lg:mb-10 text-sm text-center px-10 mb-10'>
            It is a long established fact that a reader will be distracted by 
the readable content of a 
            </p>
            <button className='px-10 py-4 ml-32 bg-[#D1B06B] text-sm text-slate-800 font-semibold'>
                Get in touch
            </button>
          </div>
          <div className=''>
              <img src={Heroimage} alt="" className='lg:mr-96' />
          </div>

    </div>
    <div className='bg-[#1F2732] lg:gap-8 lg:p-40 py-20 text-center lg:flex justify-center items-center'>
      <div>
        <img src={Man} alt="" className='lg:w-96 lg:h-56 lg:mb-10 hidden sm:hidden lg:block md:hidden' />
        <img src={Bang} alt="" className='hidden sm:hidden lg:block md:hidden lg:w-96 lg:h-56' />
      </div>
      <div className='lg:w-96'>
        <div className='text-3xl lg:text-4xl mb-8 text-white font-bold'>The Simple Choice
for Complex Litigation
        </div>
        <div>
          <img src={stuff} alt="" className='mb-5' />
        </div>
        <div className='text-xs text-[#D1B06B]  px-10'>
        There are many variations of passages of Lorem Ipsum available, but the majority have su alteration in some form, by injected humour.
        </div>
        <div>
          <div className=' justify-center flex mt-3 gap-8 items-center mb-5'>
            <img src={Belowhero} alt="" />
            <p className='text-white text-base'>
              Phillip gbeho
            </p>
          </div>
        </div>
        <div className='lg:flex lg:gap-8 px-24 '>
        <button className='lg:flex flex gap-4 mb-5 px-8 py-2 lg:justify-center items-center bg-slate-600'>
                <div className=''>
                  <img src={Bookpen} alt="" className='' />
                </div>
                <div className='lg:w-32'>
                  <h5 className='text-sm text-yellow-500 font-semibold'>
                    Case Success
                  </h5>
                  <p className='text-xs text-slate-200 '>
                    95% win rate
                  </p>
                </div>
          </button>
        <button className='lg:flex flex gap-4 mb-5 px-5 py-2 lg:justify-center items-center bg-[#D1B06B]'>
                <div className=''>
                  <img src={thirtyfive} alt="" className='' />
                </div>
                <div className='lg:w-32'>
                  <h5 className='text-sm text-slate-900 font-semibold'>
                    years experience
                  </h5>
                  
                </div>
          </button>
        
        </div>
      </div>

    </div>

</>
  )
}
