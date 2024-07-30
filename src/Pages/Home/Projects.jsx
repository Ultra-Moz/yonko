import React from 'react'
import projectsData from "../../../public/data/projects.json"

const Projects = () => {
    return (
        <div className='tile'>
            <h3 className='text-grayColor'>Projects:</h3>
            <div className='mt-6 flex flex-col justify-end items-start gap-6 max-h-[440px] overflow-scroll hide-scroll'>
                {projectsData.map((projectData, index) => {
                    return <div key={index}>
                        <div className='flex items-center gap-3'>
                            <div className='text-grayColor font-medium flex items-center justify-center px-2 py-[2px] bg-borderColor rounded-lg'>{index+1}</div>
                            <span className='text-white'>{projectData.name}</span>
                        </div>
                        <span className='mt-4 text-grayColor font-medium'>{projectData.startDate} • {projectData.endDate}</span></div>
                })}

            </div>
        </div>
    )
}

export default Projects
