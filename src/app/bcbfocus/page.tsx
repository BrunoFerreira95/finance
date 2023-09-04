import Header from '@/components/page/Header'
import React from 'react'

import Setember from '@images/bcbfocus/2023/setember.png'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <div>
            <Header/>
            <div className='flex justify-center'>
                <Image src={Setember} alt='focus of setember'/>
            </div>
        </div>
    </>
  )
}

export default page