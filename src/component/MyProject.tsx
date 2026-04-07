import Leskita from "@/public/leskita.png";
import Jeparanesia from "@/public/8.jpg";
import Image from "next/image";

export const MyProject = () => {
  return (
    <div className="flex-col flex py-8 gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <h1 className="font-bold text-xl md:text-2xl w-60">My Project</h1>
          <div className="w-full h-0 border-b border-gray-600" />
        </div>
        <p className="font-bold text-sm md:text-lg">
          Each project is unique. Here are some of my works.
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-40">
        <div className="relative w-full justify-between max-w-3xl h-132 flex flex-col md:flex-row gap-8 p-6 bg-[#071324] border border-gray-800 rounded-4xl">
          <div className="absolute z-20 md:-top-16 -right-1 -top-15">
            <h1 className="font-train text-white text-[80px] mask-[linear-gradient(to_bottom,black_50%,transparent_75%)]">
              01
            </h1>
          </div>
          <div className="md:h-full h-65 w-full md:max-w-100 group relative rounded-xl overflow-hidden">
            <div className="w-full h-full absolute bg-teal-200/50 z-10 group-hover:hidden transition-all ease-in-out duration-700" />
            <div className="h-full md:w-105 z-0 absolute -right-4  group-hover:scale-110 transition-all ease-in-out duration-700">
              <Image loading="eager" src={Leskita} alt="" />
            </div>
          </div>
          <div className="flex flex-col h-[50%] md:h-full justify-between">
            <p className="md:text-[60px] text-[40px] text-gray-200 font-bold">
              Leskita
            </p>
            <div className="flex flex-col group">
              <a
                href="https://leskita.vercel.app/"
                target="blank"
                className="md:text-[25px] font-bold hover:text-teal-200 transition-all ease-in-out duration-500"
              >
                Visit The Website
              </a>
              <span className="w-20 border group-hover:w-34 md:group-hover:w-54 transition-all ease-in-out duration-500 group-hover:border-teal-200" />
            </div>
            <div className="font-mono text-[12px] flex gap-2 flex-wrap w-full max-w-70">
              <p>React Js</p>
              <p>Tailwindcss</p>
              <p>Aos</p>
              <p>React-icons</p>
              <p>React-slick</p>
              <p>Slick-carousel</p>
            </div>
          </div>
        </div>
        <div className="relative w-full justify-between max-w-3xl h-132 flex flex-col md:flex-row gap-8 p-6 bg-[#071324] border border-gray-800 rounded-4xl">
          <div className="absolute z-20 md:-top-16 right-2 -top-15">
            <h1 className="font-train text-white text-[80px] mask-[linear-gradient(to_bottom,black_50%,transparent_75%)]">
              02
            </h1>
          </div>
          <div className="md:h-full h-65 w-full md:max-w-100 group relative rounded-xl overflow-hidden">
            <div className="w-full h-full absolute bg-teal-200/50 z-10 group-hover:hidden transition-all ease-in-out duration-700" />
            <div className="h-full w-100 md:w-190 z-0 absolute -right-4  group-hover:scale-110 transition-all ease-in-out duration-700">
              <Image loading="eager" src={Jeparanesia} alt="" />
            </div>
          </div>
          <div className="flex flex-col h-[50%] md:h-full justify-between">
            <p className="md:text-[60px] text-[40px] text-gray-200 font-bold">
              Jeparanesia
            </p>
            <div className="flex flex-col group">
              <a
                href="https://jeparanesia.vercel.app/"
                target="blank"
                className="md:text-[25px] font-bold hover:text-teal-200 transition-all ease-in-out duration-500"
              >
                Visit The Website
              </a>
              <span className="w-20 border group-hover:w-34 md:group-hover:w-54 transition-all ease-in-out duration-500 group-hover:border-teal-200" />
            </div>
            <div className="font-mono text-[12px] flex gap-2 flex-wrap w-full max-w-70">
              <p>Next-Js</p>
              <p>Tailwindcss</p>
              <p>Framer-motion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
