import React from 'react'


// The cinema components that needs to display lists of the cinemas which need fine tune styling and great aesthetic few

const CinemaList = () => {


  return (
    <>
    <section>
     <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center cursor-auto hover:cursor-pointer">
      <div className="text-sm font-medium leading-none">

        <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
         hello  
        </span>
        <span className="text-muted-foreground text-[#2d2d2d]"> BROWSE BY <span className="text-[#3d5b5e]">CINEMAS &gt;&gt;&gt; </span> </span>
        <div className="text-muted-foreground ml-14 text-[#cb202d]">See what&apos;s playing in cinemas near you</div>
       </div>
      </div>
    </section>
    </>
  )
}

export default CinemaList