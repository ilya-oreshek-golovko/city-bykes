import React, { memo, useContext } from 'react'
import { INetwork } from '../../interfaces'
import { HandleObjectClickContext } from '../../context';

function Network({network} : {network: INetwork}) {

  const context = useContext(HandleObjectClickContext);
  return (
    <div key={network.id} className='card' onClick={(evt) => {context?.networkClick(network.id)}}>
      <div className='text-2xl text-white text-center'>{network.name}</div>
      <div className='text-sm text-slate-100'>City: {network.location.city}</div>
      <div className='text-sm text-slate-100'>Company: {network.company}</div>
    </div>
  )
}

export default memo(Network, (prevProps, nextProps) => {
  return prevProps.network.id === nextProps.network.id;
})