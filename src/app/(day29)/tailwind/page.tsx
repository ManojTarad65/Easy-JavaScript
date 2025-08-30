// "use client";
// import React from "react";

// export default function Page() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       {/* Relative Parent */}
//       <div className="relative w-80 h-80 bg-gray-700 rounded-lg">
//         {/* Absolute Child - Top Left */}
//         <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded">
//           Top Left
//         </div>

//         {/* Absolute Child - Bottom Right */}
//         <div className="absolute bottom-2 right-2 bg-green-500 text-white px-3 py-1 rounded">
//           Bottom Right
//         </div>

//         {/* Centered using top-1/2 + left-1/2 + translate */}
//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//                         bg-red-500 text-white px-3 py-1 rounded"
//         >
//           Center
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import { Bell } from "lucide-react"; // nice icon library

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Parent is relative */}
      <div className="relative">
        {/* Bell Icon */}
        <Bell className="w-12 h-12" />

        {/* Notification Badge */}
        <span
          className="absolute -top-1 -right-1 bg-red-500 text-xs 
                         text-white px-2 py-0.5 rounded-full"
        >
          3
        </span>
      </div>
    </div>
  );
}
