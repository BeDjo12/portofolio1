import Image from "next/image";
import avatar from "@/public/avatar.png";

export const Header = () => {
  return (
    <div className="font-mono w-full h-25 px-20 items-center rounded-full flex justify-between">
      <div className="w-14 h-14 flex overflow-hidden border-2 rounded-full border-teal-200 cursor-pointer hover:scale-105 hover:border-teal-400 hover:shadow-[1px_1px_6px_6px_rgba(0,109,91,0.5)] transition-all ease-in-out duration-300">
        <Image src={avatar} alt="" />
      </div>
      <div className="flex gap-8 text-md items-center ">
        <a href="" className="hover:text-teal-200 transition-all ease-in-out duration-300">About</a>
        <a href="" className="hover:text-teal-200 transition-all ease-in-out duration-300">Project</a>
        <a href="" className="hover:text-teal-200 transition-all ease-in-out duration-300">Contact</a>
        
      </div>
    </div>
  );
};
