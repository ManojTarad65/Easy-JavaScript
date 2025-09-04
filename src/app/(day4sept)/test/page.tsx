// import React from 'react'

// const Test = () => {
//   {
// let name = "Manoj"
// console.log(name)
// }
// // console.log(name) //error
// var name1= "JP"
//   return (
//     <div>{name1}</div>
//   )
// }

// export default Test

// import React from 'react'

// const Test = () => {

//   let a = "10"
//   let b = "20"
//   let c = "manoj"

//   console.log(a * b) //200
//   console.log(a * c) //NaN


//   console.log(a + c) //10manoj

//   return (
//     <div>Test</div>
//   )
// }

// export default Test


// import React from 'react'

// const Test = () => {
//   let a = 5
//   let b = 5
//   let c = "5"
//   console.log(a === b) 
//   console.log(a === c)


//   return (
//     <div>Test</div>
//   )
// }

// export default Test

//split , join
// import React from 'react'

// const Test = () => {
//   let a = "Manoj Tarad"


//   let b = a.split("")
//   console.log(b)


//   let d = b.join("")
//   console.log(d)
 
 
//   return (
//     <div>Test</div>
//   )
// }

// export default Test


//slice & indexing
// import React from 'react'

// const Test = () => {
//   let a = "Manoj"
//   console.log(a.slice(0, 3)) //Slice

//   console.log(a[0]) //Indexing
  

//   return (
//     <div>Test</div>
//   )
// }

//object
// const Test = () => {
//   let a =[{
//     name: "Manoj",
//     age: 22,
//     city: "Pune"
//   },
//   {
//     name: "Devesh",
//     age: 21,
//     city: "Pune"
//   },
//   {
//     name: "Rahul",
//     age: 20,
//     city: "Punjab"  
//   }
// ]



//   return (
//     <div>{a.map((item,index)=>
    
//     <p key={index}>
//        {item.name} </p>

//     )}</div>
   
//   )
// }

// export default Test

//onClick & onChange
// "use client"
// import React, { useState } from 'react'

// const Test = () => {
//   const [input, setInput] = useState("")
//   const handleChange = (e) => {
//     setInput(e.target.value)
    
//   }

//   const handleClick = () => {
//     alert("Hello clicked")
//   }
//   return (
//     <div className='flex justify-center items-center h-screen w-screen bg-gray-900 flex-col gap-4 text-white'>
//       <form action="" className='flex flex-col gap-4'>
//         <input type="text" value={input} placeholder='Enter your Input ...' onChange={handleChange}/>
//         <button type="submit" onClick={handleChange}>Submit</button>
//         <button onClick={handleClick}>Click Me</button>
//       </form>
//     </div>
//   )
// }

// export default Test

//Nan, null , undefined
// import React from 'react'

// const Test = () => {
//   let a = " "
//   let b = null
//   let c ;
//   let d = "manoj"

//   console.log(typeof a) // string
//   console.log(typeof b) // null
//   console.log(typeof c) // undefined
//   console.log(a * d) // NaN

//   return (
//     <div>Test</div>
//   )
// }

// export default Test

//ternary operator

import React from 'react'

const Test = () => {
  let a = 10
  let b = 20

  return (
    <div>{a > b ? "a is greater" : "b is greater"}</div>
  )
}

export default Test

// 46 Manoj good morning
// 44 Devesh good night  


