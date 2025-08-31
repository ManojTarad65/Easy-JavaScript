// # Q5. project based on array ?

// 1. push - add element at last
// 2. pop - remove element at last
// 3. shift - remove element at first
// 4. unshift - add element at first
// "use client";
// import { relative } from "path";
// import React, { useState } from "react";

// const page = () => {
//   const [arr, setArr] = useState([]);
//   const [input, setInput] = useState("");
//   const [message, setMessage] = useState("");
//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };
//   const handlePush = (e) => {
//     e.preventDefault();
//     if (input.length === 0) {
//       setMessage("Input is empty, You can't Push");
//     } else {
//       setArr([...arr, input]);
//       setMessage("");
//     }
//     setInput("");
//   };
//   const handlePop = (e) => {
//     e.preventDefault();
//     if (arr.length === 0) {
//       setMessage("Array is empty, You can't remove");
//     } else {
//       setArr(arr.slice(0, arr.length - 1));
//       setMessage("");
//     }
//     // array = [1,2,3,4,5]
//   };
//   const handleUnshift = (e) => {
//     e.preventDefault();
//     if (input.length === 0) {
//       setMessage("Input is empty, You can't Unshift");
//     } else {
//       setArr([input, ...arr]);
//       setMessage("");
//     }
//     setInput("");
//   };
//   const handleShift = (e) => {
//     e.preventDefault();
//     if (arr.length === 0) {
//       setMessage("Array is empty, You can't remove");
//     } else {
//       setArr(arr.slice(1));
//       setMessage("");
//     }
//   };
//   return (
//     <div className="flex justify-center items-center h-screen w-screen bg-gray-900 flex-col  ">
//       <div className="bg-blue-400 h-2/5 w-2/5 rounded flex justify-center items-center flex-col gap-10">
//         <div className="font-bold text-2xl flex gap-2">
//           {arr.length === 0
//             ? "Array is empty"
//             : arr.map((item, index) => {
//                 return (
//                   <div
//                     className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded "
//                     key={index}
//                   >
//                     {item}
//                   </div>
//                 );
//               })}
//         </div>
//         <form action="">
//           <div className="font-bold text-2xl">
//             <label htmlFor="arr">Input : </label>
//             <input
//               type="text"
//               id="arr"
//               className="bg-gray-300 border-2 border-black rounded-2xl"
//               value={input}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex justify-center gap-4">
//             <button
//               className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded cursor-pointer"
//               onClick={handlePush}
//             >
//               Push
//             </button>
//             <button
//               className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded cursor-pointer"
//               onClick={handlePop}
//             >
//               pop
//             </button>
//             <button
//               className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded cursor-pointer"
//               onClick={handleUnshift}
//             >
//               unshift
//             </button>
//             <button
//               className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded cursor-pointer"
//               onClick={handleShift}
//             >
//               shift
//             </button>
//           </div>
//           <div className="font-bold text-2xl text-white">
//             {message && message}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default page;

// problem
// 1:
// 2.

// devesh
// 1. 5 marks

// manoj

// relative + absolute

"use client";
import React, { useState } from "react";

const arrProject = () => {
  const [arr, setArr] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handlePush = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      setMessage("Input is empty , You can't push them");
    } else {
      setArr([...arr, input]);

      setMessage("");
    }
    setInput("");
  };
  const handlePop = (e) => {
    e.preventDefault();
    if (arr.length === 0) {
      setMessage("Array is empty , You can't pop them");
    } else {
      setArr(arr.slice(0, arr.length - 1));
      setMessage("");
    }
  };
  const handleShift = (e) => {
    e.preventDefault();
    if (arr.length === 0) {
      setMessage("Array is empty , You can't shift them");
    } else {
      setArr(arr.slice(1));
      setMessage("");
    }
  };
  const handleUnshift = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      setMessage("Input is empty , You can't unshift them");
    } else {
      setArr([input, ...arr]);

      setMessage("");
    }
    setInput("");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900 flex-col">
      <div className="bg-blue-400  h-2/5 w-2/5 rounded flex justify-center items-center flex-col gap-10 ">
        <div className="font-bold flex-wrap text-2xl flex gap-3 w-[400px] h-[100px] justify-center items-center overflow-auto">
          {arr.length === 0
            ? "Array is empty"
            : arr.map((item, index) => {
                return (
                  <div key={index}
                    className={`
                            bg-gray-900 text-white font-bold text-2xl 
                            px-4 py-2 rounded shadow-lg`}
                  >
                    {item}
                  </div>
                );
              })}
        </div>
        <form action="">
          <div>
            <label htmlFor="arr">Input : </label>
            <input
              type="text"
              id="arr"
              placeholder="Enter your Input ..."
              className="bg-gray-300 border-2 border-black rounded-2xl p-2"
              value={input}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4 ">
            <button
              className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded cursor-pointer"
              onClick={handlePush}
            >
              Push
            </button>
            <button
              className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded cursor-pointer"
              onClick={handlePop}
            >
              Pop
            </button>
            <button
              className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded cursor-pointer"
              onClick={handleShift}
            >
              Shift
            </button>
            <button
              className="bg-gray-900 text-white font-bold text-2xl mt-4 px-4 py-2 rounded cursor-pointer"
              onClick={handleUnshift}
            >
              Unshift
            </button>
          </div>
          <div className="font-bold text-2xl text-white">
            {message && message}
          </div>
        </form>
      </div>
    </div>
  );
};

export default arrProject;
