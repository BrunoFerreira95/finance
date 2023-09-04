'use client'
import { useEffect, useState } from 'react'

import { fetchFinanceCalendar } from '@/controllers/financeCalendar.controller'
import { test } from '@/db/financeCalendar'
import Header from '@/components/page/Header'



export default function Home() {
  const [calendar, setCalendar] = useState(test)
  useEffect(() => {
  }, [])
  return (
    <>
      <Header />
    <main className='flex flex-col items-center'>

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
