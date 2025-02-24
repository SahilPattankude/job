import React from 'react'
import { Badge } from '../ui/badge'
import { Ghost } from 'lucide-react'

function JobCards() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-500 cursor-pointer hover:shadow-xl hover:shadow-blue-300 hover:p-3'>
        <div>
        <h1 className='text-2xl font-medium'>amdocs</h1>
        <p className='text-md text-gray-600'>Magarpatta</p>
        <div>
            <h2 className='font-bold text-lg my-2'>Java Developer</h2>
            <p className='text-md text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex gap-2 items-center mt-4'>
            <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>10 Openings</Badge>
            <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>10 LPA</Badge>
            <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>Remote</Badge>
            <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>Full Time</Badge>

        </div>
        </div>
    </div>
  )
}

export default JobCards
