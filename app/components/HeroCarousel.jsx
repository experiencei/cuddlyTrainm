import EmblaCarousel from "./EmblaCarousel"

// This is the components that display the potray images of the images in the carousel , which i used Embla carousel for displaying and passing the images
// which definately need some sleek styling

const OPTIONS = { loop: true }

 const SLIDES = [
  {
    imgurl: "/assets/images/Events.jpg",
    text: "Discover your city&apos;s best events & experience"
  },
  {
    imgurl: "/assets/images/Events.jpg",
    text: "Explore unforgettable experiences near you"
  },
  {
    imgurl: "/assets/images/Events.jpg",
    text: "Discover hidden gems and local favorites"
  },
  {
    imgurl: "/assets/images/Events.jpg",
    text: "Create experiences you'll never forget"
  },
]


import React from 'react'

const HeroCarousel = () => {
  return (
    <EmblaCarousel  slides={SLIDES} options={OPTIONS} />
  )
}

export default HeroCarousel

