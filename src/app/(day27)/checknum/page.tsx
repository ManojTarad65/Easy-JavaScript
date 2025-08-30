// even / odd
"use client";
import React, { useState } from "react";
const page = () => {
  const [input, setInput] = useState(""); // input : string
  const [result, setResult] = useState(""); // result : string

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
    // input : data 
    // input data type : string
    const value = Number(input);
    if (!isNaN(value)) {
      setResult(value % 2 === 0 ? `${value} is Even` : `${value} is Odd`);
    } else {
      setResult("It is not a valid Number");
    }
  };
  return (
    <div className="h-screen w-screen bg-amber-400 flex justify-center items-center">
      <div className="h-2/5 w-2/5 bg-blue-500 flex justify-center items-center rounded flex-col gap-4">
        <form className="flex flex-col gap-4">
          <div className="">
            <label htmlFor="input" className="mr-4">
              Number :
            </label>
            <input
              type="text"
              id="input"
              placeholder="Enter your Input ..."
              className="border border-black"
              value={input}
              onChange={handleChange} // input : string
            />
          </div>
        </form>
        <div className="font-bold text-2xl">{result}</div>
      </div>
    </div>
  );
};

export default page;

// cases
// 1. number -> store
// 2. onchange -> update
// 3. onclick -> referesh problem -> preventDefault

// condition
// 1. Nan : It is not a valid Number
// number : number % 2 === 0 ? "Even" : "Odd"