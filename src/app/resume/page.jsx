"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
//estas importaciones las porpone react, interesante investigar para que son
// import { IoLogoCss3 } from "react-icons/io5";
// import { DiMongodb } from "react-icons/di";
// import { AiOutlineApi } from "react-icons/ai";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas dolorem architecto tempora numquam tempore reprehenderit non.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Pablodrum",
    },
    {
      fieldName: "phone",
      fieldValue: "5555555555",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Email",
      fieldValue: "Pablodrum@gmail.com",
    },
    {
      fieldName: "freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Lenguajes",
      fieldValue: "Spanish,English",
    },
  ],
};

//experience data
const experience = {
  icon: "/src/public/drum.png",
  title: " My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas dolorem architecto tempora numquam tempore reprehenderit non.",
  items: [
    {
      company: "Arbitrum & Fracaster",
      position: "Winner of the Buildathon Frame it!",
      duration: "2024",
    },
    {
      company: "SETI S.A.S",
      position: "Full Stack Developer",
      duration: "2023",
    },
    {
      company: "UPB University",
      position: "Audiovisual Producer",
      duration: "2023-2024",
    },
    {
      company: "Filtro Estudio",
      position: "Project Manager",
      duration: "2015-2022",
    },
    {
      company: "Medellin Mayoralty",
      position: "Project Manager",
      duration: "2013-2015",
    },
  ],
};

// education data
const education = {
  icon: "/src/public/drum.png",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas dolorem architecto tempora numquam tempore reprehenderit non.",
  items: [
    {
      institution: "CESDE",
      degree: "Full Stack Development",
      duration: "2022",
    },
    {
      institution: "Eth Fundation",
      degree: "Web 3 & dApps Develop",
      duration: "2022",
    },
  ],
};

//skills
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas dolorem",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.rs",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },

    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Experience"
          className="Flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/*experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#41416e] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            {/*dot */}
                            <span></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>

            {/*skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>

            {/*projects */}
            <TabsContent value="projects" className="w-full">
              projects
            </TabsContent>

            {/*about */}
            <TabsContent value="aboutme" className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
