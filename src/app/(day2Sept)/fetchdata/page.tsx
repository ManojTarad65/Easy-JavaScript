
import React, { useEffect } from 'react'

const GetData = async() => {
    const getData = async()=>{
        const response =  await new Promise((resolve)=> setTimeout(()=>resolve(fetch("https://jsonplaceholder.typicode.com/users")), 4000))
        const data = await response.json()
        console.log(data)
    }
    getData()
    return <h1>GetData</h1>
}

export default GetData

// async
// data fetch 

// Data Fetch 
// 1. self made data - > list -> object
// 2. data is on another server -> API -> JSON

// what is server ?
// server is a computer that stores data and provides it to other computers on request
// 1. client -> data access -> request
// 2. server -> data provide (response is given by server based on request)

// what is json ? -> javascript object notation
// convert fetch data into object
// depend on order in aplhabetical order

// what is refresh ?
// refresh is a process of loading the page again
// data truncate -> data hat jata he 
// truncate ->it means data is stored at some position
//fetching data  - server <-----> client

// observe
// 1. path
// data iterate : 
// fetch -> await -> json -> 

// data must be in the form of list - []



// Problem 
// 1. async -> loader is not working 
// 2. settimeout -> wait  -> laoder animation is not working

//solution 
// what is Promise ? 
// Promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// 1. pending -> 
// 2. fullfilled -> 
// 3. rejected -> 

// concepts 
// 1. new -> both the promises are different , all the promise treat differently 




// Module 5 
// 1. How to fetch the data with the help of useEffect
// 2. how to fetch the data which is made by us
// 3. props -> destructuring and children 
// 4. project -> invole laoding animation , fetching data 
// 5. Shoes wali website -> padh lena yaad se
// 6. JP lovers 