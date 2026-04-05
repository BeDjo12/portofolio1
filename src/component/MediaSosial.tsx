import Link from "next/link";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

const defaultMedias = [
  { id: 1, icon: <FiGithub />, link: "#" },
  { id: 2, icon: <FiInstagram />, link: "#" },
  { id: 3, icon: <FiTwitter />, link: "#" },
  { id: 4, icon: <FiLinkedin />, link: "#" },
];

export const MediaSosial = () => {
  return (
    <div className="flex flex-col items-center text-[20px] gap-6">
      {defaultMedias.map(({ id, icon, link }) => (
        <Link key={id} href={link} className="hover:text-teal-200 hover:scale-105 transition-all ease-in-out duration-300 ">
          {icon}
        </Link>
      ))}
      <div className="w-0.4 border border-foreground h-40" />
    </div>
  );
};
