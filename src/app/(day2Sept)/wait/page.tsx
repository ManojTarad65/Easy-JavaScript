// import React from 'react'

// const Wait = () => {
//     const promise =new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Hello JP lovers")
//             resolve("Hello JP lovers")
//         }, 3000);
//     })
//     // promise.then((value)=>{
//     //     console.log(value)
//     // })
// }

// export default Wait

// "use client";
// import React, { useState, useEffect } from "react";

// const Wait = () => {
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // simulate async task
//     const promise = new Promise<string>((resolve) => {
//       setTimeout(() => {
//         resolve("Hello JP lovers");
//       }, 3000);
//     });

//     promise.then((value) => {
//       setMessage(value);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return (
//       <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
//         <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//         <p className="ml-3 text-white">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
//       <h1 className="text-white text-2xl">{message}</h1>
//     </div>
//   );
// };

// export default Wait;


export default async function page(){
    await new Promise ((resolve)=>{
        setTimeout(resolve, 3000);
    })
    return <h1>Wait</h1>
}