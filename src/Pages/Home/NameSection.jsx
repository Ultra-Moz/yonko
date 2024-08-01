import React, { useContext } from 'react'
import { HoverContext } from "../../HoverContext.jsx";

const NameSection = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  return (
    <div className='bg-bgColor container w-full min-h-[260px] rounded-2xl p-6 flex flex-col justify-between items-start border-solid border-2 border-borderColor col-span-3'>
      <img src="/images/logo.svg" alt="logo" />
      <div className='text-white flex flex-col gap-3'>
        <h1 className='text-5xl font-semibold pr-3' onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}>Karthik Deshmukh</h1>
        <p className='font-normal text-grayColor self-startp pr-2' onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}>Unveiling our digital forge</p>
      </div>
    </div>
  )
}

export default NameSection
