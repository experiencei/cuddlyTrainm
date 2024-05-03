import EmblaCarousel from "./EmblaCarousel"

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = [1 , 2 , 3 , 5 , 5]

[
  {
    imgurl: "/assets/images/Events.jpg",
    text: "Discover your city&apos;s best events & experience"
  },
  {
    imgurl: "/assets/images/Events.jpg",
    text: "Discover your city&apos;s best events & experience"
  },
  {
    imgurl: "/assets/images/Events.jpg",
    text: "Discover your city&apos;s best events & experience"
  },
  {
    imgurl: "/assets/images/Events.jpg",
    text: "Discover your city&apos;s best events & experience"
  },
]


import React from 'react'

const HeroCarousel = () => {
  return (
    <EmblaCarousel  slides={SLIDES} options={OPTIONS} />
  )
}

export default HeroCarousel

