import React from 'react'
import Seperator from './Seperator'
import Sortinggrid from './Sortinggrid'
const Categories = () => {



  const items = [
    { id: 1, icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="12" height="12"><path d="M24,7.64v8.666c0,.635-.353,1.206-.92,1.489-.238,.119-.493,.177-.747,.177-.353,0-.702-.113-.997-.334l-2.336-2.327v.19c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5H14.5c2.481,0,4.5,2.019,4.5,4.5v.157l2.281-2.301c.563-.428,1.23-.489,1.799-.205,.568,.284,.92,.854,.92,1.489Zm-6,.86c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v7c0,1.93,1.57,3.5,3.5,3.5H14.5c1.93,0,3.5-1.57,3.5-3.5v-7Zm5-.86c0-.257-.138-.48-.368-.595-.23-.115-.491-.091-.697,.062l-2.936,2.97v3.821l2.989,2.986c.152,.108,.412,.133,.643,.017,.23-.115,.368-.337,.368-.595V7.64Z"/></svg>
    , title: 'New Shows' },
    { id: 2, icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="12" height="12" viewBox="0 0 24 24"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0c2.011,0,4.013,.521,5.79,1.508l.821,.456-.836,.427c-2.799,1.428-5.774,5.106-5.774,9.109,0,4.142,2.734,8.054,6.648,9.512l.903,.337-.795,.544c-2.012,1.378-4.349,2.106-6.756,2.106ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11c1.896,0,3.744-.494,5.397-1.435-3.81-1.833-6.397-5.84-6.397-10.065,0-4.008,2.701-7.713,5.497-9.523-1.416-.641-2.953-.977-4.497-.977Zm7.5,13.118l-1.499-2.998-2.998-1.499,2.998-1.499,1.499-2.998,1.499,2.998,2.998,1.499-2.998,1.499-1.499,2.998Zm-2.26-4.497l1.507,.754,.753,1.506,.753-1.506,1.507-.754-1.507-.753-.753-1.506-.753,1.506-1.507,.753Zm5.76,8.378c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-6-3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>
    , title: 'Late Nights' },
    { id: 3, icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="12" height="12" viewBox="0 0 24 24"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0c2.011,0,4.013,.521,5.79,1.508l.821,.456-.836,.427c-2.799,1.428-5.774,5.106-5.774,9.109,0,4.142,2.734,8.054,6.648,9.512l.903,.337-.795,.544c-2.012,1.378-4.349,2.106-6.756,2.106ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11c1.896,0,3.744-.494,5.397-1.435-3.81-1.833-6.397-5.84-6.397-10.065,0-4.008,2.701-7.713,5.497-9.523-1.416-.641-2.953-.977-4.497-.977Zm7.5,13.118l-1.499-2.998-2.998-1.499,2.998-1.499,1.499-2.998,1.499,2.998,2.998,1.499-2.998,1.499-1.499,2.998Zm-2.26-4.497l1.507,.754,.753,1.506,.753-1.506,1.507-.754-1.507-.753-.753-1.506-.753,1.506-1.507,.753Zm5.76,8.378c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-6-3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>
    , title: 'Culture' },
    { id: 4, icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="12" height="12" viewBox="0 0 24 24"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0c2.011,0,4.013,.521,5.79,1.508l.821,.456-.836,.427c-2.799,1.428-5.774,5.106-5.774,9.109,0,4.142,2.734,8.054,6.648,9.512l.903,.337-.795,.544c-2.012,1.378-4.349,2.106-6.756,2.106ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11c1.896,0,3.744-.494,5.397-1.435-3.81-1.833-6.397-5.84-6.397-10.065,0-4.008,2.701-7.713,5.497-9.523-1.416-.641-2.953-.977-4.497-.977Zm7.5,13.118l-1.499-2.998-2.998-1.499,2.998-1.499,1.499-2.998,1.499,2.998,2.998,1.499-2.998,1.499-1.499,2.998Zm-2.26-4.497l1.507,.754,.753,1.506,.753-1.506,1.507-.754-1.507-.753-.753-1.506-.753,1.506-1.507,.753Zm5.76,8.378c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-6-3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>
    , title: 'Comedy' },
    { id: 5, icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="12" height="12" viewBox="0 0 24 24"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0c2.011,0,4.013,.521,5.79,1.508l.821,.456-.836,.427c-2.799,1.428-5.774,5.106-5.774,9.109,0,4.142,2.734,8.054,6.648,9.512l.903,.337-.795,.544c-2.012,1.378-4.349,2.106-6.756,2.106ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11c1.896,0,3.744-.494,5.397-1.435-3.81-1.833-6.397-5.84-6.397-10.065,0-4.008,2.701-7.713,5.497-9.523-1.416-.641-2.953-.977-4.497-.977Zm7.5,13.118l-1.499-2.998-2.998-1.499,2.998-1.499,1.499-2.998,1.499,2.998,2.998,1.499-2.998,1.499-1.499,2.998Zm-2.26-4.497l1.507,.754,.753,1.506,.753-1.506,1.507-.754-1.507-.753-.753-1.506-.753,1.506-1.507,.753Zm5.76,8.378c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-6-3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>
    , title: 'Music' },
    { id: 6, icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="12" height="12" viewBox="0 0 24 24"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0c2.011,0,4.013,.521,5.79,1.508l.821,.456-.836,.427c-2.799,1.428-5.774,5.106-5.774,9.109,0,4.142,2.734,8.054,6.648,9.512l.903,.337-.795,.544c-2.012,1.378-4.349,2.106-6.756,2.106ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11c1.896,0,3.744-.494,5.397-1.435-3.81-1.833-6.397-5.84-6.397-10.065,0-4.008,2.701-7.713,5.497-9.523-1.416-.641-2.953-.977-4.497-.977Zm7.5,13.118l-1.499-2.998-2.998-1.499,2.998-1.499,1.499-2.998,1.499,2.998,2.998,1.499-2.998,1.499-1.499,2.998Zm-2.26-4.497l1.507,.754,.753,1.506,.753-1.506,1.507-.754-1.507-.753-.753-1.506-.753,1.506-1.507,.753Zm5.76,8.378c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-6-3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>
    , title: 'Nearby' },
    
  ];


  return (
    <>
    <section>
    <Seperator seperate={"WHAT ARE YOU LOOKING FOR?"}/>
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
    <section>
     <Sortinggrid items={items}/>
    </section>
    </>
  )
}

export default Categories


