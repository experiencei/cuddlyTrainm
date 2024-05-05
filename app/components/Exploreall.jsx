import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Seperator from './Seperator'

const Exploreall = () => {

  
  return (
    <>
    <Seperator seperate={"EXPLORE ALL EVENT"}/>
    <Link href="#" className="group relative block">
  <div className="relative h-[350px] sm:h-[450px] ring ring-indigo-50 rounded-xl border border-gray-700 bg-gray-800 p-4  ">
   

    <Image
      src="/assets/images/Events.jpg"
      width={1000}
       height={800}
       alt="Exploreall"
      className="absolute inset-0 h-full w-full object-cover "
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white">Taste Cinema</h3>

    <p className="mt-1.5 text-pretty text-xs text-white">
      Taste Cinema
    </p>

    <span
      className="mt-3 inline-block bg-[#cb202d] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      Book tickets
    </span>
    <p className="mt-1.5 text-pretty text-xs text-white">
      900
    </p>
  </div>
</Link>
</>
  )
}

export default Exploreall