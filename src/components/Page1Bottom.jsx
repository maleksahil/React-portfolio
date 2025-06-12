import React from 'react'
import circle from '../images/cssda-wotd-white.avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('img',{
      rotate:360,
      duration:2,
      repeat:-1
    })
  })

  return (
    <div className='absolute left-0 p-20 flex items-end justify-between bottom-0 w-full'>
      <div>
        <h2 className='text-2xl font-[anzo1]'>FRONTEND DEVELOPMENT USING REACT</h2>
        <h2 className='text-2xl font-[anzo1] text-gray-400'>ALSO AVAILABLE FOR FREELANCE</h2>
      </div>
      <div>
        <img src={circle}/>
        <img/>
      </div>
    </div>
  )
}

export default Page1Bottom
