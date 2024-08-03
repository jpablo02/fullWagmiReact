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

  const handleSlideChange=(Swiper)=>{
    //get current slide index 
    const currentIndex = Swiper.activeIndex;
    //update project state based on current slide index 

    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {Project.num}
              </div>

              {/*project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-DEFALUT transition-all duration-500 capitalize">
                {Project.category} project
              </h2>

              {/*project description */}

              <p className="text-white/60">{Project.description}</p>

              {/*stack */}
              <ul className="flex gap-4">
                {Project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent-DEFALUT">
                      {item.name}
                      {/*remove last coma*/}
                      {index == !Project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/*border */}

              <div className="border border-white/20"></div>

              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*live project button */}
                <Link href={Project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-DEFALUT" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/*github project button */}
                <Link href={Project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent-DEFALUT" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w.[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((Project, index) => {
                return <SwiperSlide key={index}>slide</SwiperSlide>;
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
