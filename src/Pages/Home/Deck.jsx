import React from 'react'

const Deck = () => {

const skills = ["Figma", "Node.js", "MySQL", "Swift UI", "Framer", "React", "Tailwind CSS"]

  return (
    <div className='tile flex flex-col items-start justify-between self-start'>
      <h3 className='text-grayColor'>Our Deck:</h3>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill,index)=>{
            return <div key={index} className='bg-borderColor px-[10px] py-2 flex rounded-lg text-grayColor'>{skill}</div>

        })}
      </div>
    </div>
  )
}

export default Deck
