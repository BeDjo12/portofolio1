import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-teal-200 font-mono">Hi, my name is</p>
      <div className="font-bold text-[60px] ">
        <h1 className="text-gray-200">Andy Mulyanto.</h1>
        <h1>Front End Developer</h1>
      </div>
      <p className="w-150 text-lg">
        Passionate about frontend development, I focus on crafting digital
        products that are visually polished, performance-optimized, and deliver
        a consistent experience across all platforms.
      </p>
      <a href="" className="mt-6 w-40 h-12 bg-teal-200 rounded-md">
        <button className="hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer w-40 h-12 border px-10 py-2 transition-all ease-in-out duration-300 rounded-md border-teal-200 bg-background text-teal-200">
          <p>Hire Me</p>
        </button>
      </a>
    </div>
  );
};
