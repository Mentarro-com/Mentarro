import React from 'react'

function index() {
  return (
    <section className="flex flex-col lg:h-svh justify-center items-center overflow-scroll ">
    <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
     <div>
      <h1>Animated images on hover</h1>
      <p className="text-balance">Hover over the images to see the animation.</p>
     </div>
    </div>
    <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6 border-t pt-12">
     
     <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" style={{ backgroundImage: "url('https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg')" }} >
       <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
        <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
         <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two. </p>
        </div>
       </div>
      </article>
     </div>
     <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"  style={{ backgroundImage: "url('https://i.pinimg.com/564x/33/d6/54/33d654e8058fdf69e160dcbd2235cdac.jpg')" }}>
       <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
        <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
         <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three. </p>
        </div>
       </div>
      </article>
     </div>
     <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" style={{ backgroundImage: "url('https://i.pinimg.com/564x/39/b8/01/39b801afe355e623bcb3928b1c1b046d.jpg')" }}>
       <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
        <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
         <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four. </p>
        </div>
       </div>
      </article>
     </div>
     <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
      <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group"  style={{ backgroundImage: "url('https://i.pinimg.com/564x/2b/b5/48/2bb548dbf4a4c57381a7b7f736b4930b.jpg')" }}>
       <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
        <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
         <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Join us in embracing sustainability, where design and functionality meet eco-conscious decisions. Description five. </p>
        </div>
       </div>
      </article>
     </div>
    </div> 
    
   </section>
  )
}

export default index