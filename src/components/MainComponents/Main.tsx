import React from 'react'
import Network from './Network'
import Station from './Station'

export default function Main({networks, stations} : {networks : any, stations : any}) {
  return (
    <main className='h-screen w-full grid grid-cols-2 gap-4'>
      <div className='h-screen border-2 border-red-500 rounded'>
        {/* {
          networks.map((network : any) => {
            <Network data={network}/>
          })
        } */}
      </div>
      <div className='h-screen border-2 border-green-500 rounded'>
          {/* {
            stations.map((station : any) => {
              <Station data={station}/>
            })
          } */}
      </div>
    </main>
  )
}
