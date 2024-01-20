import React from 'react'
import Logo from '../src/assets/Logo.png'



export default function Footer() {
  return (
    <div className=''>

      <div className='lg:flex gap-8 bg-slate-900 p-10 text-white  lg:px-40 justify-between'>
      <img src={Logo} alt="" className='h-12' />
        <div>
        <h3 className='lg:mb-10 text-xl font-bold'>
          Practice Area  
        </h3>  
        <ul>
          <li>Business Law</li>
          <li>Criminal law</li>
          <li>Car Accident</li>
          <li>Family law</li>
          <li>Wrongful death</li>
          <li>Construction law</li>
        </ul>
        </div>
        <div>
        <h3 className='lg:mb-10 text-xl font-bold'>
          Practice Area  
        </h3>  
        <ul>
          <li>Business Law</li>
          <li>Criminal law</li>
          <li>Car Accident</li>
          <li>Family law</li>
          <li>Wrongful death</li>
          <li>Construction law</li>
        </ul>
        </div>
        <div>
        <h3 className='lg:mb-10 text-xl font-bold'>
          Practice Area  
        </h3>  
        <ul>
          <li>Business Law</li>
          <li>Criminal law</li>
          <li>Car Accident</li>
          <li>Family law</li>
          <li>Wrongful death</li>
          <li>Construction law</li>
        </ul>
        </div>
      </div>


    </div>
  )
}
