import React from 'react'

const Deployments = () => {
  return (
    <div className='tile flex flex-col items-start justify-between self-start'>
      <h3 className='text-grayColor'>Deployments</h3>
      <div className='flex flex-col gap-6'>
        <span className='text-5xl text-white font-bold'>14</span>
        <p className='text-grayColor'>Successful deployments so far</p>
      </div>
    </div>
  )
}

export default Deployments
