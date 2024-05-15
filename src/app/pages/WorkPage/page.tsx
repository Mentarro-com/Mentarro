import React from 'react'
import WorkAgenda from "@/app/components/WorkAgenda"
import Internship from '@/app/components/Internship'
import ImageAni from '@/app/components/ImageAni'
import InternList from '@/app/components/InternList'



function page() {
  return (
    <div>
        <WorkAgenda />
        <Internship />
        {/* <ImageAni /> */}
        <InternList />
    </div>
  )
}

export default page