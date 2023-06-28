import React from 'react'

export default function Header({stationCount, currentStation} : {stationCount : number, currentStation: string}) {
  return (
    <header className='h-12 bg-cyan-800 md:flex md:justify-between md:items-center fixed left-0 right-0'>
      <div className='text-light text-2xl'>Test</div>
      <div className='text-light text-lg'>Count of station: {stationCount}</div>
      <div className='text-light text-lg'>Selected Station: {currentStation}</div>
    </header>
  )
}
