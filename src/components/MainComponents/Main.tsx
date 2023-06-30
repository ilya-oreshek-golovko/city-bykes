import React, { useState } from 'react'
import Network from './Network'
import Station from './Station'
import { IMain, INetwork, IStation } from '../../interfaces'

export default function Main({networks, stations} : {networks : Array<INetwork>, stations : IStation[]}) {

  const [state, setState] = useState<IMain>({
    start: 0,
    end: 3,
  });
  function handleClick(){
    setState({start: state.end, end: state.end + 4});
  }
  function updateState(){
    if(!networks) return [];
    const end = state.end + 4;
    const result : INetwork[] = [];
    for(let i = state.start; i < end; i++){
      result.push(networks[i]);
    }
    return result;
  }

  return (
    <main className='h-screen w-full grid grid-cols-2 gap-4 pt-24 bg-slate-100'>
      <div>
        <h2 className='text-3xl font-semibold text-cyan-700 text-center mb-5'>Networks</h2>
        {
          updateState().map((network : INetwork) => {
            return <Network network={network} />
          })
        }
        <button onClick={evt => setState({start: state.end, end: state.end + 4})}>jfj</button>
      </div>
      <div>
        <h2 className='text-3xl font-semibold text-cyan-700 text-center mb-5'>Stations</h2>
        { 
          stations.map((station : IStation) => {
            return <Station station={station}/>
          })
        }
      </div>
    </main>
  )
}
