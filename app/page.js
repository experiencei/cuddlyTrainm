import Image from 'next/image'
import MaxWidthWrapper from "../app/components/MaxWidthwrapper"
import HeroCarousel from "../app/components/HeroCarousel"
import Categories from "../app/components/Categories"


export default function Home() {
  return (
    <>
     <MaxWidthWrapper>
      <HeroCarousel/>
      <Categories/>
     </MaxWidthWrapper>
    </>
  );
}