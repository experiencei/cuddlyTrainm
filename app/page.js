import Image from 'next/image'
import MaxWidthWrapper from "../app/components/MaxWidthwrapper"

export default function Home() {
  return (
    <>
     <MaxWidthWrapper>
     <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Discover your city&apos;s best events & experience</h1>
           
          </div>

          <Image 
            src="/assets/images/Events.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 
     </MaxWidthWrapper>
    </>
  );
}