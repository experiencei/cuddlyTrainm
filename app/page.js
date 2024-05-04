import Image from 'next/image'
import MaxWidthWrapper from "../app/components/MaxWidthwrapper"
import HeroCarousel from "../app/components/HeroCarousel"
import Categories from "../app/components/Categories"
import Featured from "../app/components/Featured"

import { ComboBoxResponsive } from "../app/components/CinemaList"

export default function Home() {
  return (
    <>
     <MaxWidthWrapper>
      <HeroCarousel/>
      <Categories/>
      <Featured/>
     </MaxWidthWrapper>
    </>
  );
}