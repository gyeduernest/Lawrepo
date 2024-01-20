import React from 'react'
import Mobilemenu from '../src/assets/Mobilemenu.svg'


export default function Mobilenav() {
  return (
    <div>
      <nav className='sm:block md:block lg:hidden block'>
        <button>
          <img src={Mobilemenu} alt="" />
        </button>
      </nav>
    </div>
  )
}
