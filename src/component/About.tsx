import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { FaCode } from "react-icons/fa6";
import { PiGlobeBold } from "react-icons/pi";
import { RxComponent1 } from "react-icons/rx";
import { PiDeviceMobileCameraLight } from "react-icons/pi";
import Image from "next/image";
import avatar from "@/public/Ava.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const frameworks = [
  { id: 1, icon: <FaHtml5 />, disk: "HTML" },
  { id: 2, icon: <FaCss3Alt />, disk: "CSS" },
  { id: 3, icon: <FaJs />, disk: "JavaScript" },
  { id: 4, icon: <SiTypescript />, disk: "TypeScript" },
  { id: 5, icon: <FaReact />, disk: "ReactJs" },
  { id: 6, icon: <RiNextjsLine />, disk: "NextJs" },
];

export const About = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-20 justify-between py-10">
      <div className="flex flex-col gap-8 md:w-[50%]">
        <div className="flex gap-4 items-center">
          <h1 className="font-bold text-xl md:text-2xl w-60">About Me</h1>
          <div className="w-full h-0 border-b border-gray-600" />
        </div>
        <h1 className="font-bold text-2xl md:text-3xl">
          I turn ideas and designs into functional, accessible, and performant
          websites{" "}
          <span className="text-teal-200">
            using modern frontend technologies
          </span>
        </h1>

        <Tabs defaultValue="1" orientation="vertical">
          <TabsList
            variant="line"
            className="flex-col h-auto justify-start border-l-4 border-neutral-700 p-0 font-mono"
          >
            <TabsTrigger value="1" className="cursor-pointer">
              Frontend Development
            </TabsTrigger>
            <TabsTrigger value="2" className="cursor-pointer">
              Web Performance
            </TabsTrigger>
            <TabsTrigger value="3" className="cursor-pointer">
              Component Based UI
            </TabsTrigger>
            <TabsTrigger value="4" className="cursor-pointer">
              Responsive Design
            </TabsTrigger>
          </TabsList>
          <TabsContent value="1" className="flex flex-col gap-4">
            <p className="font-bold underline underline-offset-4 text-lg text-teal-200">
              Frontend Development
            </p>
            <FaCode className="w-10 md:w-20 h-full" />I build responsive,
            accessible, and scalable websites using modern frontend tools and
            best practices.
          </TabsContent>
          <TabsContent value="2" className="flex flex-col gap-4">
            <p className="font-bold underline underline-offset-4 text-lg text-teal-200">
              Web Performance
            </p>
            <PiGlobeBold className="w-10 md:w-20 h-full" />I optimize websites
            for speed and efficiency to ensure smooth experiences across all
            devices.
          </TabsContent>
          <TabsContent value="3" className="flex flex-col gap-4">
            <p className="font-bold underline underline-offset-4 text-lg text-teal-200">
              Component Based UI
            </p>
            <RxComponent1 className="w-10 md:w-20 h-full" />I specialize in
            crafting reusable UI components that are clean, maintainable, and
            aligned with design systems.
          </TabsContent>
          <TabsContent value="4" className="flex flex-col gap-4">
            <p className="font-bold underline underline-offset-4 text-lg text-teal-200">
              Responsive Design
            </p>
            <PiDeviceMobileCameraLight className="rotate-180 w-10 md:w-20 h-full" />
            I ensure that every layout adapts beautifully to different screen
            sizes — from mobile to desktop.
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-[80%] md:w-[40%] flex flex-col gap-8">
        <div className="border-2 relative border-teal-200 w-full aspect-square h-fit rounded-md">
          <div className="w-full h-full rounded-md overflow-hidden bg-teal-200 absolute -top-4 -left-4">
            <Image loading="eager" src={avatar} alt="" />
          </div>
        </div>
        <p className="md:text-lg text-md font-bold">
          Here are a few technologies I've been working with recently:
        </p>
        <div className="flex w-full justify-between">
          {frameworks.map(({ id, icon, disk }) => (
            <div key={id} className="text-3xl group relative">
              <div className="group-hover:scale-110 hover:text-teal-200 transition-all ease-in-out duration-700">
                {icon}
              </div>
              <p className="group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-700 text-sm absolute text-center left-1/2 -translate-x-1/2 text-teal-200">
                {disk}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
