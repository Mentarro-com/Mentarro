import React from 'react'
import img from '@/app/pages/remote.jpg'

function index() {
  return (
    <div>
      <div className='flex items-center justify-center h-96 bg-fixed bg-center bg-cover' style={{backgroundImage: `url(${img})`}}>
      <h1 className='text-5xl text-red-600 font-extrabold uppercase styled-text'>Remote Way Of Teaching</h1>
      <style jsx>{`
  .styled-text {
    font-family: 'YourStylishFont', sans-serif; /* Replace 'YourStylishFont' with the name of your preferred font */
    border: 3px solid #fff; /* Add a border around the text */
    padding: 10px; /* Add some padding to make the border more visible */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Add a shadow effect to the text */
    filter: drop-shadow(0px 0px 10px rgba(255, 0, 0, 0.8)); /* Add a drop shadow effect */
  }
`}</style>

      
    </div>
    </div>
  )
}

export default index
