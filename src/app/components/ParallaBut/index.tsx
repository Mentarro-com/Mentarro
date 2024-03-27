import React from 'react'

function index() {
  return (
    <div>
      <div className='flex items-center justify-center h-96 bg-fixed bg-cover' style={{backgroundImage: 'url(./second.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className='text-5xl uppercase'>Remote Way Of Teachimg</h1>
      <div
    className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
    <span>Hover Over Me</span>
  </div>
    </div>
    </div>
  )
}

export default index
