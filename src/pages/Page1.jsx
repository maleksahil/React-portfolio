import React, { useRef } from "react";
import me from "../images/me.png";
import backgroundImg from "../images/hand-painted-watercolor-background-with-sky-clouds-shape.jpg";
import logo from "../images/LOGO WHITE_edited.avif";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";

const Page1 = () => {

  const tiltref = useRef(null)

  const mouseMoving = (e) => {
    console.log(tiltref.current.getBoundingClientRect())
  };
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
          className="absolute right-20 bottom-25 transform scale-125"
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
