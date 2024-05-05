import Image from 'next/image'
import MaxWidthWrapper from "../app/components/MaxWidthwrapper"
import HeroCarousel from "../app/components/HeroCarousel"
import Categories from "../app/components/Categories"
import Featured from "../app/components/Featured"
import PlanningFor from "../app/components/PlanningFor"
import EventReel from "../app/components/EventReel"
import Exploreall from "../app/components/Exploreall"
import { ComboBoxResponsive } from "../app/components/CinemaList"

export default function Home() {
  return (
    <>
     <MaxWidthWrapper>
      <HeroCarousel/>
      <Categories/>
      <Featured/>
      <PlanningFor/>
      <EventReel/>
      <Exploreall/>
     </MaxWidthWrapper>
    </>
  );
}