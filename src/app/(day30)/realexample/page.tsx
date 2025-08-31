"use client";
import React, { useEffect, useState } from "react";
import Loader from "../loaderAnimation/page"; // import one of the loaders we made


const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setData(["Apple", "Banana", "Orange"]); // fake API response
//       setLoading(false);
//     }, 1000);
//   }, []);
  useEffect(() => {
    setInterval(() => {
      setData(["Apple", "Banana", "Orange"]); // fake API response
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900 text-white">
      {loading ? (
        <Loader />
      ) : (
        <ul className="space-y-2 text-xl">
          {data.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
