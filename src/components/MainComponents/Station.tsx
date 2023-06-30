import { memo, useContext, useState } from 'react'
import { IStation } from '../../interfaces'
import { HandleObjectClickContext } from '../../context';
import {BiBomb} from 'react-icons/bi';

function Station({station} : {station : IStation}) {

  const context = useContext(HandleObjectClickContext);
  const [ttt, setTTT] = useState<boolean>(false);
  return (
    <div key={station.id} onClick={(evt) => {context?.stationClick(station.id)}} className='card'>
      <div className='text-xl text-white text-center mb-3'>{station.name}</div>
      <div className='flex justify-between items-center'>
        <BiBomb className={'text-2xl ml-5 hover:scale-125 transition-all ' + (ttt ? "text-green-500" : "text-stone-400")} onClick={evt => setTTT(!ttt)}/>
        <div className='text-sm text-slate-100 text-right mr-5'>Free bikes: {station.free_bikes}</div>
      </div>
    </div>
  )
}

export default memo(Station, (prevProps, nextProps) => {
  return prevProps.station.id === nextProps.station.id;
})