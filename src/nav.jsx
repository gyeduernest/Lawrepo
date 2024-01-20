import React from 'react'
import Logo from "../src/assets/Logo.png"
import Callicon from "../src/assets/Callicon.svg"
import Messageicon from "../src/assets/Messageicon.svg"
import Mobilenav from './mobilenav'


export default function NavBar() {
  return (
    <div>
      <nav className='p-5 justify-between bg-slate-700 flex px-5 lg:px-10 items-center'>
           <img src={Logo} alt="" className='lg:h-12 h-8' />
        <ul className='lg:flex hidden sm:hidden md:hidden  gap-8 items-center text-white'>
          <li>Home</li>
          <li>About us</li>
          <li>Pratice Areas</li>
          <li>Testimonials</li>
          <li>Contact us</li>
        </ul>
        <div className=' gap-3 flex '>
          <button className='lg:flex gap-2 items-center bg-slate-800 w-40 text-sm p-2 h-12 rounded-md text-white hidden sm:hidden md:hidden'>
                <div className='rounded-full border w-5 h-5 border-yellow-400 p-1 '>
                  <img src={Callicon} alt="" className='w-3 flex justify-center items-center h-3' />
                </div>
                <div className='text-center'>
                  <h5 className='text-sm text-yellow-500 font-semibold'>
                    Call us
                  </h5>
                  <p className='text-xs text-slate-200 '>
                    +8272769527657
                  </p>
                </div>
          </button>
          <button className='hidden sm:hidden md:hidden lg:flex gap-2 items-center bg-slate-800 w-48 text-xs p-2 h-12 rounded-md text-white'>
                <div className='rounded-full border w-5 h-5 border-yellow-400 p-1'>
                  <img src={Messageicon} alt="" className='w-3 flex justify-center items-center h-3' />
                </div>
                <div className='text-center'>
                  <h5 className='text-sm text-yellow-500 font-semibold'>
                    Email us
                  </h5>
                  <p className='text-xs text-slate-200 '>
                    Attorneyster@gmail.com
                  </p>
                </div>
          </button>

        </div>
      </nav>
    </div>
  )
}
