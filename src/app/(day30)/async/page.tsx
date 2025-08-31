"use client";
import React, { useEffect, useState } from "react";

const AsyncAwaitPage = () => {
  const [data, setData] = useState("Loading...");

  // async function inside useEffect
  useEffect(() => {
    async function loadData() {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve("✅ Data fetched successfully!"), 2000)
        );
        setData(response);
      } catch (error) {
        setData("❌ Failed to fetch");
      }
    }

    loadData();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <h1 className="text-white text-2xl">{data}</h1>
    </div>
  );
};

export default AsyncAwaitPage;
