"use client"
import React, { useEffect } from 'react'

const sync = () => {
    console.log("start");

 
   

   setTimeout(() => {
        console.log("second");
    }, 2000);

     console.log("end");

     ///start
     // end
    //second
     //third
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gray-900'>
        <h1>sync</h1>
    </div>
  )
}

export default sync