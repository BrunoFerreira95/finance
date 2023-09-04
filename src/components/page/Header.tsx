import React from 'react'

import Image from 'next/image'

import Logo from '@images/B.svg'

const Header = () => {
  return (
    <div className='flex justify-center items-center'>

    <nav className='w-3/5 h-40'>
      <div className='flex flex-row items-center'>
      <Image src={Logo} alt='Bruno' className='my-5'/>
      <h1 className='mx-5'>News about Brazil</h1>

      </div>
    <hr className='border-2 border-gray-400' />
    </nav>
    </div>
  )
}

export default Header