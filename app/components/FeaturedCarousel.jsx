"use client"
import * as React from "react"
import Eventcard from './Eventcard'

import { Card, CardContent } from "@/components/ui/card"

// The Carousel that was used in the featured for displaying the featured events ,
// it was gotten from sahdcn ui and render the eventCard fives times through a dummy Array map(5)

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // the horizontal scrolling results from here the first div and carousel classname

  return (
    <div className="container mx-auto overflow-x-flow">
      <Carousel setApi={setApi} className="w-full flex">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-2">
                <Eventcard EventName={"Hello"} EventDate={"12 may"} Eventprice={50}/>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
