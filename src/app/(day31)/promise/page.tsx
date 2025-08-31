"use client"
import React from 'react'

const page = () => {
//     console.log("hello");
// let promise = new Promise(function(resolve  ,reject){
//     alert("I am an alert in promise")
// resolve(56)
// })
//     setTimeout(function(){
//         console.log("hello in 2 second")

//     },2000)

//     console.log("my name is  manoj")

//     console.log(promise)
let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am fullfilled")
        resolve(true)

    },2000)
})
let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I am a promise and I am fullfilled");
   
    reject(new Error(" I am an error"))
  }, 2000);
});
p1.then((value)=>{
   console.log(value)
})
p2.catch((error)=>{
    console.log("some error occurred in p2")
})
  
  return (
    <div className='bg-gray-900 h-screen w-screen flex justify-center items-center text-white'>page</div>
  )
}

export default page