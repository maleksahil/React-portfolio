import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full z-10 p-18 flex items-center justify-end'>
      <button className='bg-blue-400 hover:bg-blue-200 cursor-pointer hover:text-black shadow-xl duration-1700 px-6 py-3 rounded-full text-xl text-white border-4'>Hire me</button>
      <i className="ri-menu-line text-4xl ml-3"></i>
    </div>
  )
}

export default Header
