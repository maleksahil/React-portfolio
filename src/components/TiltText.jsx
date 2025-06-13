import React from 'react'

const TiltText = (props) => {
  return (
   <div id="tiltDiv" ref={props.abc} className="text-white mt-20 ml-10">
          <h1 className="text-6xl uppercase leading-[4vw] font-[anzo1]">
            I am a <span className="text-black">FRONT END</span>
          </h1>
          <h1 className="text-[6vw] leading-[6vw] font-[anzo1]">DEVELOPER</h1>
          <h1 className="text-6xl uppercase leading-[4vw] font-[anzo1]">
            To Hire
          </h1>
        </div>

  )
}

export default TiltText