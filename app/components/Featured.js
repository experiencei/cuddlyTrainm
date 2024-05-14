import React from 'react'
import Seperator from './Seperator'
import { CarouselDApiDemo}from './FeaturedCarousel'


// The components for featured part for the iconic and trending events , which uses Carousel api for the carousel

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


