import React from 'react'

const CurrentWorking = () => {
  return (
    <div className='tile flex flex-col items-start justify-between'>
      <h3 className='text-grayColor'>
        Currently: <span className='text-white font-semibold'>Designing</span>
      </h3>
      <div className='flex flex-col items-start'>
    <div className='bg-green rounded-xl p-3 flex items-center justify-center'><img src="/images/working.svg" alt="Working" /></div>
        
        <p className='text-white'>Our devs are working on <span>Medidrop</span></p>
      </div>
    </div>
  )
}

export default CurrentWorking
