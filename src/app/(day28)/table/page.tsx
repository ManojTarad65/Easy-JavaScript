// "use client";
// import React, { useState } from "react";

// const page = () => {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState("");

//   const handleChange = (e) => {
//     const val = e.target.value;

//     e.preventDefault();
//     setInput(val);
//   };
//   const handleSubmit = (e) => {

    
//     e.preventDefault();
//     const number = Number(input);
//     if (!isNaN(number)) {
//       let table = [];
//       for (let i = 1; i <= 10; i++) {
//         table.push(number + " x " + i + " = " + number * i);
//       }
//       setResult(table);
//     } else {
//       setResult("Please enter a valid number");
//     }
//   };
//   return (
//     <div className="bg-amber-500 h-screen w-screen flex justify-center items-center flex-col">
//       <div className="h-2/5 w-2/5 flex  justify-center items-center bg-red-500">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="input" className="mr-4">
//               Number :
//             </label>
//             <input
//               type="text"
//               id="input"
//               placeholder="Enter your Input ..."
//               value={input}
//               onChange={handleChange}
//               className="border border-black"
//             />
//           </div>
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//       {result && (typeof result==="string" ? <div className=" ">{result}</div> : <div className=" ">
//         {result.map((item, index) => (
//           <div key={index} className="font-bold text-xl text-red-500">{item}</div>
//         ))}
//         </div>)}
      
//     </div>
//   );
// };

// export default page;
"use client"
import React, { useState } from 'react'
const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    const val = e.target.value;
    e.preventDefault();
    setInput(val);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = Number(input);
    if(!isNaN(num)){
      let table = [];
      for(let i=1; i<=10; i++){
        table.push(`${num} x ${i} = ${num*i}`);

      }
      setResult(table);
    }
    else {
      setResult("Please enter a valid number");
    }
  };
  
  return (
    <div className='h-screen w-screen bg-amber-400 flex justify-center items-center flex-col gap-4'>
      <div className='h-2/5 w-2/5 bg-blue-500 flex justify-center items-center rounded flex-col gap-4'>
        <form onSubmit={handleSubmit}>
          <div className='flex gap-4 items-center font-bold'>
            <label htmlFor="input">Number:</label>
            <input type="text" id="input" 
            className='border border-black p-2 rounded'
            placeholder="Enter your Input ..."
            value={input}
            onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-5">
          <button className='bg-blue-500 text-white p-2 rounded bg-green-600 cursor-pointer' type="submit">Submit</button>
          </div>

        </form>

      </div>
      <div className="font-bold text-2xl flex flex-col gap-2">
        {result && (typeof result === "string" ? <p className='text-black text-lg font-bold bg-gray-900 text-white p-2 rounded'>{result}</p> : result.map((item,index) => <p className='text-black text-lg font-bold bg-gray-900 text-white p-2 rounded' key={index}>{item}</p>))}
        </div>
      </div>
  )
}

export default Home






// ok bhaiya , thank you ! 
// next js is awesome ! 
// imp topics + serious hona he + sab link he + jp lover he ! 