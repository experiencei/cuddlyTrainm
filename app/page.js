import Image from 'next/image'
import MaxWidthWrapper from "../app/components/MaxWidthwrapper"
import HeroCarousel from "../app/components/HeroCarousel"
import Categories from "../app/components/Categories"
import Featured from "../app/components/Featured"
import PlanningFor from "../app/components/PlanningFor"
import EventReel from "../app/components/EventReel"
import Exploreall from "../app/components/Exploreall"


export default function Home() {
  return (
    <>
     {/* i created a MaxWidthwrapper so every components align on the same width regardless  */}
     <MaxWidthWrapper>
      
      {/* the HeroCarousel is the hero images for catchyimages to potray what the platform should be remember for 
      and the carousel is achieve by embla carousel library */}
      <HeroCarousel/>
      
      {/* Categories compononents consists of the separator(for telling what the section is all about , the Cinema components and 
      the Sorting grid button for sorting base on the categories of sorting) */}
      <Categories/>

      {/* Featured is the component of caroulsel where the limelight , the trending events will be 
      (Those most iconic events happening what we want them to quickly notice) */}
      <Featured/>

      {/* The planningfor components is the sorting button for the events playing today and others ( i.e sorting by days today and not today)  */}
      <PlanningFor/>

      {/* EventReel components is the sectional components that classify the events and users can click the explore all button on it to see the classification */}
      <EventReel/>

      {/* Explore all sections is endless list of all the events regardless of sorting or anything which should be responsive according to devices*/}
      <Exploreall/>
      
     </MaxWidthWrapper>
    </>
  );
}