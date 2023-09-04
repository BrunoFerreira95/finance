'use client'

import React from 'react'

import Header from '@/components/page/Header'
import { ipc } from '@/db/ipc/data'

import { Card, Title, AreaChart, BarChart } from "@tremor/react";

type IpcProps = 
    {
        ano: string,
        mes: string,
        Habit: string,
        Aliment: string,
        Transp: string,
        Desp: string,
        Saúde: string,
        Vest: string,
        Educ: string,
        Geral: string,
      } []

      const categories = ["Habit", "Aliment", "Transp", "Desp", "Saúde", "Vest", "Educ", "Geral"];
      const colors = {
        "Habit": "indigo",
        "Aliment": "cyan",
        "Transp": "slate",
        "Desp": "gray",
        "Saúde": "zinc",
        "Vest": "neutral",
        "Educ": "stone",
        "Geral": "red",
      };
      
      


const page = () => {
    const dataFormatter = (number) => {
        return number + "%"; // Formate os valores do eixo y como porcentagens, se necessário.
      };
  return (
    <>
        <div>
            <Header/>
            <div className='flex justify-center'>

            <table>
                <caption>IPC - Índice de Preços ao Consumidor 2023</caption>
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
                {ipc.map((ipc) => (
                    <tr key={ipc.mes}>
                        <th scope='row' className='border-2 border-black  p-2'>{ipc.mes}</th>
                        <th className='border-2 border-black  p-2'>{ipc.Habit}</th>
                        <th className='border-2 border-black  p-2'>{ipc.Aliment}</th>
                        <th className='border-2 border-black  p-2'>{ipc.Transp}</th>
                        <th className='border-2 border-black  p-2'>{ipc.Desp}</th>
                        <th className='border-2 border-black  p-2'>{ipc.Saúde}</th>
                        <th className='border-2 border-black  p-2'>{ipc.Vest}</th>
                        <th className='border-2 border-black  p-2'>{ipc.Educ}</th>
                        <th className='border-2 border-black  p-2'>{ipc.Geral}</th>
                    </tr>

                ))}
                </tbody>
            </table>
            </div>
            <div className='flex justify-center'>
                            <Card className='w-1/2'>
                    <Title>Variação do IPC ao longo do tempo</Title>
                    <AreaChart
                        className="h-72 mt-4"
                        data={ipc}
                        showXAxis
                        showYAxis
                        index="mes"
                        categories={["Habit", "Aliment", "Transp", "Desp", "Saúde", "Vest", "Educ", "Geral"]}
                        colors={["indigo", "cyan", "slate", "gray", "zinc", "neutral", "stone", "red"]}
                        valueFormatter={dataFormatter}
                    />
                    
                    </Card>

            </div>
        </div>
    </>
  )
}

export default page

  
