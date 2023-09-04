import Header from '@/components/page/Header'
import React from 'react'

const page = () => {
  return (
    <>
        <div>
            <Header/>
            <div className='flex justify-center'>

            <table>
                <caption>IPC - Índice de Preços ao Consumidor</caption>
                <thead>
                    <tr>
                        <th scope='col' className='border-2 border-black'>Mês</th>
                        <th scope='col' className='border-2 border-black'>Habit</th>
                        <th scope='col' className='border-2 border-black'>Aliment</th>
                        <th scope='col' className='border-2 border-black'>Transp</th>
                        <th scope='col' className='border-2 border-black'>Desp</th>
                        <th scope='col' className='border-2 border-black'>Saúde</th>
                        <th scope='col' className='border-2 border-black'>Vest</th>
                        <th scope='col' className='border-2 border-black'>Educ</th>
                        <th scope='col' className='border-2 border-black'>Geral</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>ago</th>
                        <th>-0.20%</th>
                        <th>-1.03%</th>
                        <th>0.31%</th>
                        <th>-0.13%</th>
                        <th>0.82%</th>
                        <th>0.53%</th>
                        <th>0.13%</th>
                        <th>-0.20%</th>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </>
  )
}

export default page