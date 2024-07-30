import React from 'react'

const NameSection = () => {
  return (
    <div className='bg-bgColor container w-full min-h-[260px] rounded-2xl p-6 flex flex-col justify-between items-start border-solid border-2 border-borderColor col-span-3'>
        <img src="/images/logo.svg" alt="logo" />
        <div className='text-white flex flex-col gap-3'>
            <h1 className='text-5xl font-semibold'>Karthik Deshmukh</h1>
            <p className='font-normal text-grayColor'>Unveiling our digital forge</p>
        </div>
    </div>
  )
}

export default NameSection
