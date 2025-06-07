import React from 'react'
import me from '../images/me.png'
import backgroundImg from '../images/hand-painted-watercolor-background-with-sky-clouds-shape.jpg'

const Page1 = () => {
  return (
    <div className='bg-white h-screen p-7'>
       <div className='shadow-xl shadow-gray-700 h-full w-full rounded-3xl' style={{ backgroundImage: `url(${backgroundImg})` }}>
       <img className='absolute right-20 bottom-25 transform scale-125' src={me}/>
       </div>

    </div>
  )
}

export default Page1
