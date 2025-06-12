import React, { useRef, useState } from "react";
import me from "../images/me.png";
import backgroundImg from "../images/hand-painted-watercolor-background-with-sky-clouds-shape.jpg";
import logo from "../images/LOGO WHITE_edited.avif";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {

  const tiltref = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltref.current.getBoundingClientRect().x - tiltref.current.getBoundingClientRect().width/2)/30)
    setYVal(-(e.clientY - tiltref.current.getBoundingClientRect().y - tiltref.current.getBoundingClientRect().height/2)/10)
    // console.log(tiltref.current.getBoundingClientRect())
    tiltref.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  };


  useGSAP(function(){
    gsap.to(tiltref.current,{
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3,
      ease:'elastic.out(1,0.3)'
    })
  },[xVal,yVal])


  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="bg-white h-screen p-7"
    >
      <div
      id="page1-in"
        className="shadow-xl p-10 shadow-gray-700 h-full w-full rounded-3xl"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <img
          className="fixed right-20 bottom-25 transform scale-125"
          src={me}
        />
        <img className="h-20" src={logo} />

        <div id="tiltDiv" ref={tiltref} className="text-white mt-20 ml-10">
          <h1 className="text-6xl uppercase leading-[4vw] font-[anzo1]">
            I am a <span className="text-black">FRONT END</span>
          </h1>
          <h1 className="text-[6vw] leading-[6vw] font-[anzo1]">DEVELOPER</h1>
          <h1 className="text-6xl uppercase leading-[4vw] font-[anzo1]">
            To Hire
          </h1>
        </div>

        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
