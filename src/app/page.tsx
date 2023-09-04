'use client'
import { useEffect, useState } from 'react'

import { fetchFinanceCalendar } from '@/controllers/financeCalendar.controller'
import { test } from '@/db/financeCalendar'
import Header from '@/components/page/Header'
import Link from 'next/link'



export default function Home() {
  const [calendar, setCalendar] = useState(test)
  useEffect(() => {
  }, [])
  return (
    <>
      <Header />
      <main className='flex flex-col items-center'>
        <div>
          <Link href={'./ipc'}>
            <button className='border-2 border-gray-400 px-5 py-2 mr-5'>IPC</button>
          </Link>
          
          <Link href={'./bcbfocus'}>
            <button className='border-2 border-gray-400 px-5 py-2'>BCB Focus</button>
          </Link>

        </div>
        {calendar.map((item) => (
          <div key={item.id} className='w-1/3 border-2 border-black p-5 my-2'>
            <h2>{item.title}</h2>
            <span>{item.country}</span>
            <p>{item.comment}</p>
            <span>{item.period}</span> <br />
            <span>{item.source}</span> <br />
            <span>{item.date}</span> <br />
            {/* Conteúdo que você deseja renderizar para cada item */}
          </div>
        ))}
      </main>
    </>
  )
}
