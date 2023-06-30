import { memo } from 'react'

function Header({stationCount, currentStation} : {stationCount : number, currentStation: string | undefined}) {
  console.log("HEADER");
  return (
    <header className='h-20 bg-cyan-800 flex justify-between items-center fixed left-0 right-0 md:px-10 px-6 text-white'>
      <div className='text-bold text-2xl'>City-Bikes</div>
      <div className='flex flex-col'>
        <div className='text-light text-base'>Count of station: {stationCount > 0 ? stationCount : "Not selected"}</div>
        <div className='text-light text-base'>Selected Station: {currentStation ? currentStation : "Not selected"}</div>
      </div>
    </header>
  )
}

export default memo(Header, (prevProps, nextProps) => {
  if(prevProps.currentStation === nextProps.currentStation && 
    prevProps.stationCount === nextProps.stationCount)
  {
    console.log("Test 1");
    return true;
  }
  console.log("Test 2");
  return false;
});
