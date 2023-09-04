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
                            <Card className='w-1/2'>
                    <Title>Variação do IPC ao longo do tempo</Title>
                    <AreaChart
                        className="h-96 mt-4"
                        data={ipc}
                        showGridLines
                        showXAxis
                        showGradient
                        
                        showLegend={false}
                        allowDecimals
                        index="mes"
                        categories={["Habit", "Aliment", "Transp", "Desp", "Saúde", "Vest", "Educ", "Geral"]}
                        colors={[
                            'indigo',
                            'blue',
                            'slate',
                            'gray',
                            'zinc',
                            'neutral',
                            'stone',
                            'red',
                          ]}
                        valueFormatter={dataFormatter}
                    />
                    </Card>

            </div>
        </div>

    </>
  )
}

export default page

  
