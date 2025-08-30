// even / odd
"use client";
import React, { useState } from "react";
const page = () => {
  const [input, setInput] = useState(""); // input : string
  const [result, setResult] = useState(""); // result : string

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // first value = ""

    // setInput(e.target.value)

    const var1 = e.target.value;
    setInput(var1);


    // input : data
    // input data type : string
    const value = Number(var1);
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
        <div className="font-bold text-xl text-red-500">{result}</div>
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




// 1. console .log 
// 2. comments
// 3. type conversion
// 4. falsey value - " ", 0 , null , nan , undefined
// 5. array -> shift , unshift , pop , push
// 6. string -> toUpperCase , toLowerCase, slice, split , append , includes
// 7. var declaration -> let , const, var
// 8. scope variable
// 9. object 
// 10. map function -> array  -> object 
// 11.  events  -> onclick , onchange, onCopy 
