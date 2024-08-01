"use client";
import Link from "next/link";
import path from "path";
import { FaGithub, FaLinkedinIn, FaYoutube, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaDiscord />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return  <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={Social.path}></Link>;
      })}
    </div>
  
};

export default Social;
