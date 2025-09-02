"use client";
import React from "react";

const Async = () => {
  async function weather() {
    let delhiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("27 deg");
      }, 1000);
    });
    let bangaloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("21 deg");
      }, 7000);
    });
    //Promises
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)

    //Async Await
    console.log("Fetching Delhi weather please wait...");
    let delhiW = await delhiWeather;
    console.log("Fetched Delhi weather is " + delhiW);

    console.log("Fetching Bangalore weather please wait...");
    let bangaloreW = await bangaloreWeather;
    console.log("Fetched banglore weather is " + bangaloreW);

    //return 
    return [delhiW, bangaloreW];
  }
  console.log("loading weather please wait...");
  let a = weather();
  a.then((value) =>{
    console.log(value)
  })
  console.log(a);

  return <div>Async</div>;
};

export default Async;
