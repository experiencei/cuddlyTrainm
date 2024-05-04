import React from 'react'
import Seperator from './Seperator'
import { CarouselDApiDemo}from './FeaturedCarousel'



const Featured = () => {
  return (
    <div className="pt-6">
    <section >
    <Seperator seperate={"FEATURED"}/>
    <CarouselDApiDemo/>
    </section>
    </div>
  )
}

export default Featured 


