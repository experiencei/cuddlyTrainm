'use client'

import Link from 'next/link'
import EventListing  from "./EventLisitng"
import Seperator from './Seperator'
import Eventcard from './Eventcard'



const FALLBACK_LIMIT = 4

const EventReel = (props) => {
  const { title, subtitle, href, query } = props
  const map = [1, 2, 3, 4 ];

  return (
    <>
    <Seperator seperate={"BEST IN COMEDY"}/>
    <section className='py-4'>
      <div className='md:flex md:items-center md:justify-between mb-2'>
        <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
            {/* <h3 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              Hello 
            </h3> */}
          
          
            <p className='mt-2 text-sm text-muted-foreground'>
              Laugh out your sorrow
            </p>
      
        </div>

        
          <Link
            href="/events/playall"
            className='text-sm font-medium text-blue-600 hover:text-blue-500 md:block'>
            Explore all{' '}
            <span aria-hidden='true'>&rarr;</span>
          </Link>
      </div>

      <div className='relative'>
        <div className='mt-6 flex items-center w-full'>
          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
            {map.map((i) => (
              <Eventcard
                key={`product-${i}`}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default EventReel
