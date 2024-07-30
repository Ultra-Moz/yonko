import React from 'react'
import services from "../../../public/data/services.json"

const Services = () => {
    return (
        <div className='bg-bgColor p-6 w-full min-h-[260px] border-solid border-2 border-borderColor rounded-2xl flex flex-col justify-between col-span-3'>
            <h3 className='text-grayColor'>Services:</h3>
            <div>
                <div className='flex justify-start items-end overflow-x-auto hide-scroll gap-5'>
                    {services.map((service, index) => {
                        return <div key={index} className='flex flex-col items-start gap-4 flex-none'>
                            <div className='bg-borderColor flex justify-center items-center p-1 rounded-xl w-[48px]'>
                                <img src={service.image}  alt={service.alt} /></div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold'>{service.name}</span>
                                <p className='text-grayColor leading-[1.2] max-w-[180px]'>{service.description}</p>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Services
