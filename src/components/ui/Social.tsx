"use client";
import Link from "next/link";
import path from "path";
import { FaGithub, FaLinkedinIn, FaYoutube, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/jpablo02" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/juan-pablo-rios-ab721a250/" },
  { icon: <FaYoutube />, path: "https://youtu.be/u4G95vf4Uzo?t=37" },
  { icon: <FaDiscord />, path: "/" },
];


type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
