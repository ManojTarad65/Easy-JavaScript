"use client"
import React, { useState } from 'react'

const page = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
        setResult(e.target.value);
    };
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-amber-400'>
        <div className='h-2/5 w-2/5 bg-blue-500 flex justify-center items-center rounded flex-col gap-4'>
            <form className='flex flex-col gap-4'>
                <div className=''>
                    <label htmlFor='input' className='mr-4'>
                        Number :
                    </label>
                    <input type="text" id="input" placeholder='Enter your Input ...' className='border border-black' />
                </div>
                <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={handleChange}>
                    Submit
                </button>
            </form>
        </div>
        <div className='font-bold text-xl text-red-500'>{result}</div>
    </div>
  )
}

export default page