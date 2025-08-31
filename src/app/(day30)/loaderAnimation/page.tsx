// import React from 'react'

// const page = () => {
//   return (
//     <div className='h-screen w-screen flex justify-center items-center bg-gray-900'>
//         <div className='bg-blue-400 h-20 w-20 rounded-full flex justify-center items-center animate-spin duration-1000 ease-in-out border-4 border-l-red-400 '>
//             Loading...
//         </div>
//     </div>
//   )
// }

// export default page
// "use client";
// import React from "react";

// const Loader = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
//       <div className="h-16 w-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
//     </div>
//   );
// };

// export default Loader;
// "use client";
// import React from "react";

// const Loader = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
//       <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
//     </div>
//   );
// };

// export default Loader;

"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
      </div>
    </div>
  );
};

export default Loader;


