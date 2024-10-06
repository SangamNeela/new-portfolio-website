import React from "react";
import { BentoGrid,BentoGridItem } from "@/components/ui/bento-grid";

// react-icons
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { AiOutlineJava } from "react-icons/ai";
import { RiReactjsFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa6";
import { TbAmpersand } from "react-icons/tb";
import Heading from "./headingComponent";



export default function Skills(){
    return (
    <div className="space-y-10">
      <Heading heading="Skills"/>
      <BentoGrid className="w-full mx-auto">
      {items.map((item, i) => (
          <BentoGridItem
          key={i}
          title={item.title}
          icon={item.icon}
          />
      ))}
      </BentoGrid>
      <div></div>
    </div>
  );
}
  const items = [
    {
      title: "JavaScript",
      icon:<SiJavascript className="text-3xl bg-yellow-300"/>
    },
    {
      title: "TypeScript",
      icon:<SiTypescript className="text-3xl text-blue-500"/>

    },
    {
      title: "Python",
      icon:<AiOutlinePython className="text-4xl"/>
    },
    {
      title:"Java",
      icon:<AiOutlineJava className="text-4xl "/>
    },
    {
      title:"MySQL",
      icon:<GrMysql className="text-4xl text-blue-900"/>
    },
    {
      title:"React JS",
      icon:<RiReactjsFill className="text-4xl text-blue-500"/>
    },
    {
      title:"Next JS",
      icon:<SiNextdotjs className="text-4xl"/>
    },
    {
      title:"Express JS",
      icon:<SiExpress className="text-4xl"/>
    },
    {
      title:"Git",
      icon:<FaGitAlt className="text-4xl text-orange-600"/>
    },
    {
      title:"MongoDB",
      icon:<SiMongodb className="text-4xl text-green-500"/>
    },
    {
      title:"Docker",
      icon:<FaDocker className="text-4xl text-blue-500"/>
    },
    {
      title:"More",
      icon:<TbAmpersand className="text-4xl text-blue-500"/>
    },
  ];