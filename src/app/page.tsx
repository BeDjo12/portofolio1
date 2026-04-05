import { Header } from "../component/Header";
import { MediaSosial } from "../component/MediaSosial";
import { Hero } from "../component/Hero";
import { About } from "../component/About";

export default function Home() {
  return (
    <div >
      <Header />
      <div className="fixed bottom-0 w-full flex px-8">
        <div className="flex justify-between w-full items-center">
          <MediaSosial />
          <div className="w-4 h-full flex flex-col gap-6 font-mono">
            <div className="rotate-90 z-20">
              <a
                href=""
                className="hover:text-teal-200 hover:scale-105 transition-all ease-in-out duration-300"
              >
                andymulyanto84@gmail.com
              </a>
            </div>
            <div className="relative h-full flex justify-center w-full z-0">
              <div className="w-0.4 border border-foreground h-20 absolute bottom-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-25 px-24 flex flex-col gap-59 pt-40 z-50 relative">
        <Hero />
        <About/>
      </div>
    </div>
  );
}
