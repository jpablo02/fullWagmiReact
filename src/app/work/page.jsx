"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project1",
    description:
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla inventore repellendus reprehenderit minima aut",

    stack: [{ name: "HTML5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/src/public/drum.png",
    live: "",
    github: "",
  },

  {
    num: "02",
    category: "fullstack",
    title: "project2",
    description:
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla inventore repellendus reprehenderit minima aut",

    stack: [{ name: "REACT" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/src/public/My first design.png",
    live: "",
    github: "",
  },

  {
    num: "03",
    category: "backend",
    title: "project3",
    description:
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla inventore repellendus reprehenderit minima aut",

    stack: [{ name: "SOLIDITY" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/src/public/pablo.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [Project, setProject] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">projects</div>
    </motion.div>
  );
};

export default Work;
