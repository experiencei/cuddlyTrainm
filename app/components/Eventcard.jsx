import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Events cards that display the events based on Name , date and price and definitely need core styling and adjustment

const Eventcard = ({EventName , EventDate , Eventprice}) => {
  return (
    <div>
  <Link href="#" className="block">
  <Image
    alt=""
    src="/assets/images/Events.jpg"
    width={1000}
    height={800}
    className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
  />

  <div className="mt-2 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong className="font-medium">{EventName}</strong>

    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

    <p className=" opacity-50 sm:mt-0">{EventDate}</p>
    <p className=" opacity-50 sm:mt-0">&#8358;{Eventprice} onwards</p>
  </div>
 </Link>
    </div>
  )
}

export default Eventcard