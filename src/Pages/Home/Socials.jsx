import React from 'react'

const Socials = () => {
  return (
    <div className='tile flex flex-col justify-between'>
      <h3 className='text-grayColor'>Socials:</h3>
      <div className='flex flex-col gap-6'>
        <p className='text-white'>karthikdeshmukh35<span className='text-grayColor'>@gmail.com</span></p>
        <div className='flex justify-between'>
            <div className=' image-wrapper '>
                <a href="/"><img src="/images/icons/twitter.svg" alt="Twitter" className='svg-icon'/></a>
            </div>
            <div className='image-wrapper '>
                <a href="/"><img src="/images/icons/youtube.svg" className='svg-icon' alt="Youtube" /></a>
            </div>
            <div className='image-wrapper'>
                <a href="/"><img src="/images/icons/instagram.svg" className='svg-icon' alt="Instagram" /></a>
            </div>
            <div className='image-wrapper '>
                <a href="/"><img src="/images/icons/dribble.svg" className='svg-icon' alt="Dribble" /></a>
            </div>
            <div className='image-wrapper '>
                <a href="/"><img src="/images/icons/discord.svg" className='svg-icon' alt="Discord" /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Socials
