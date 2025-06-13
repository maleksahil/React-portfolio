import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ScrollTrigger from 'gsap/all'
const Page2 = () => {

    gsap.registerPlugin(ScrollTrigger)
    
    useGSAP(function(){
        gsap.from('.rotateText',{
            transform:'rotateX(-80deg)',
            opacity:0,
            duration:1,
            stagger:1,
            ScrollTrigger:{
                trigger:'.rotateText',
                markers:true,
                start:"top 50%",
                end: "top -100%",
                scrub:2
            }
        })
    })

  return (
    <div id='section2' className='bg-white text-center p-10 text-black'>
      <h3 className='text-gray-500 text-3xl font-[anzo1]'>Malek Sahil 2024 || Designed and developed</h3>
    <div className='rotateText'>
        <h1 className='text-[10vw] text-black font-[anzo1] font-black'>FRONTEND</h1>
    </div>
    <div className='rotateText'>
        <h1 className='text-[10vw] text-black font-[anzo1] uppercase font-black'>DEVELOPMENT</h1>
    </div>
    <div className='rotateText'>
        <h1 className='text-[10vw] text-black font-[anzo1] uppercase font-black'>IS</h1>
    </div>
    <div className='rotateText'>
        <h1 className='text-[10vw] text-black font-[anzo1] uppercase font-black'>WHERE</h1>
    </div>
    <div className='rotateText'>
        <h1 className='text-[10vw] text-black font-[anzo1] uppercase font-black'>CREATIVITY</h1>
    </div>
    <div className='rotateText'>
        <h1 className='text-[10vw] text-black font-[anzo1] uppercase font-black'>MEETS</h1>
    </div>
    <div className='rotateText'>
        <h1 className='text-[10vw] text-black font-[anzo1] uppercase font-black'>FUNCTIONALITY</h1>
    </div>
    </div>
  )
}

export default Page2
