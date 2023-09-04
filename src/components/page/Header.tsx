import React from 'react'

import Image from 'next/image'

import Logo from '@images/B.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-center items-center'>

    <nav className='w-3/5 h-40 ' >
      <div className='flex justify-between'>

      <div className='flex flex-row items-center'>
        <Link href={'/'}>
          <Image src={Logo} alt='Bruno' className='my-5'/>
        </Link>
      <h1 className='mx-5'>News about Brazil</h1>

      </div>
      <div className='flex items-center'>
        <Link href={'./'}>
          <button className='hover:bg-green-400 px-5 py-2'>
            Home
          </button>
        </Link>
      </div>
      </div>
    <hr className='border-2 border-gray-400' />
    </nav>
    </div>
  )
}

export default Header