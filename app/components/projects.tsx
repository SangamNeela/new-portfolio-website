"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Image from "next/image";
import Link from "next/link";
// react icons
import { FiGithub } from "react-icons/fi";
import { CiLink } from "react-icons/ci";
import { SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiXampp } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";

//google font
import { Ubuntu_Mono } from "next/font/google";
export const unbuntu_mono = Ubuntu_Mono({
  subsets: ['latin'],
  weight: '400', // Adjust the weight if necessary
});

export default function Projects(){
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}


const SkeletonOne = () => {
  return (
    <div>
      <div>
        <div className="flex justify-around items-center gap-9 py-2">
          <p className={` font-bold md:text-4xl text-xl text-white w-fit`}>Authentication Service App</p>
          <div className="flex justify-end items-center gap-1">
          <Link href="https://next-js-authentication-app-auth-js.vercel.app/" target="_blank"><CiLink className=" text-4xl text-yellow-300"/></Link>
          <Link href="https://github.com/SangamNeela/NextJS-Authentication-App" target="_blank"><FiGithub className=" text-2xl text-yellow-300"/></Link>
          </div>
        </div>
        <p className={`${unbuntu_mono.className} my-4 max-w-lg text-white`}>
        - A Robust Authentication System Using Auth JS, Includes “Credential based Sign- in and Sign-Up” and social login options i.e.” Google” and “GitHub”.
        <br />
        <br />
        - Showcased both server-side and client-side rendering techniques to improve performance and SEO
        <br />
        <br />
        - Enhanced security by allowing users to toggle two-factor authentication (2FA) on or off.
        </p>
      </div>
      <hr />
      <div>
      <p className="font-bold md:text-4xl text-xl text-white mt-3">Technologies Used</p>
        <div className="flex flex-wrap justify-evenly items-center gap-6 mt-4">
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <SiJavascript className=" text-4xl text-yellow-400 bg-black"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <SiNextdotjs className="text-black text-4xl"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <Image src="/auth_js_logo.png" alt="" width={43} height={43}/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <SiPrisma className="text-black text-4xl"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-pink-400">
            <SiReacthookform className=" text-4xl text-white"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <SiTypescript className=" text-4xl text-blue-500"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-blue-900">
            <SiZod className="text-black text-4xl "/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <SiShadcnui className="text-black text-4xl"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white ">
            <RiTailwindCssFill className=" text-4xl text-blue-500"/>
          </p>
        </div>
      </div>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center gap-9 py-2">
          <p className={` font-bold md:text-4xl text-xl text-white w-fit`}>EASE MY TICKET</p>
          <div className="flex justify-end items-center gap-1">
          {/* <CiLink className=" text-4xl text-yellow-300"/> */}
          <Link href={"https://github.com/SangamNeela/Ease-my-Ticket"} target="_blank"><FiGithub className=" text-2xl text-yellow-300"/></Link>
          </div>
        </div>
        <p className={`{${unbuntu_mono.className} my-4 max-w-lg text-white`}>
        - user of this website can book tickets online for local city buses for daily transportation.
        <br />
        <br />
        - On every booking online ticket is generated and the ticket gets invalid as the passenger reaches his/her destination.
        <br />
        </p>
      </div>
      <hr />
      <div>
        <p className="font-bold md:text-4xl text-xl text-white mt-3">Technologies Used:</p>
        <div className="flex flex-wrap justify-evenly items-center mt-6">
          <p  className="p-3 max-w-fit border border-solid rounded-full bg-white">
            <SiJavascript className=" text-5xl text-yellow-400 bg-black"/>
          </p>
          <p  className="p-2 max-w-fit border border-solid rounded-full bg-white">
            <FaPhp className="text-black text-5xl"/>
          </p>
          <p  className="p-2 max-w-fit border border-solid rounded-full bg-white">
            <SiMysql className="text-black text-5xl"/>
          </p>
          <p  className="p-2 max-w-fit border border-solid rounded-full bg-white">
            <TiHtml5 className=" text-5xl text-orange-600"/>
          </p>
          <p  className="p-2 max-w-fit border border-solid rounded-full bg-white">
            <MdCss className="text-black text-5xl text-"/>
          </p>
        </div>
      </div>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center gap-9 py-2">
          <p className={` font-bold md:text-4xl text-xl text-white w-fit`}>My Portfolio Website</p>
          <div className="flex justify-end items-center gap-1">
          <CiLink className=" text-4xl text-yellow-300"/>
          <FiGithub className=" text-2xl text-yellow-300"/>
          </div>
        </div>
        <p className={`{${unbuntu_mono.className} my-4 max-w-lg text-white`}>
        - Developed a responsive portfolio website using Next.js to showcase my projects and skills in full-stack development.
        <br />
        <br />
        - Employed modern CSS for styling and ensured cross-device compatibility.
        <br />
        <br />
        - Hosted the website using Vercel, ensuring continuous deployment and scalability.
        </p>
      </div>
      <hr />
      <div>
        <p className="font-bold md:text-4xl text-xl text-white mt-3">Technologies Used:</p>
        <div className="flex flex-wrap justify-evenly items-center mt-6">
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <SiJavascript className=" text-4xl text-yellow-400 bg-black"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <SiNextdotjs className="text-black text-4xl"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <Image src="/aceternity_ui.jpg" alt="" width={43} height={43}/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white">
            <SiTypescript className=" text-4xl text-blue-500"/>
          </p>
          <p  className="p-2 max-w-fit rounded-full bg-white ">
            <RiTailwindCssFill className=" text-4xl text-blue-500"/>
          </p>
          <p  className="p-2 max-w-fit border border-solid rounded-full bg-white">
            <MdCss className="text-black text-5xl text-"/>
          </p>
        </div>
      </div>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center gap-9 py-2">
          <p className={` font-bold md:text-4xl text-xl text-white w-fit`}> Card-Less ATM</p>
          <div className="flex justify-end items-center gap-1">
          {/* <CiLink className=" text-4xl text-yellow-300"/>
          <FiGithub className=" text-2xl text-yellow-300"/> */}
          </div>
        </div>
        <p className={`{${unbuntu_mono.className} my-4 max-w-lg text-white`}>
        - User of ATM System are allowed to make Transactions using OTP via “e-mail” rather than a Card.
        <br />
        <br />
        - Implemented OTP verification with e-mail using python.
        <br />
        <br />
        - Worked on backend for implementing the functionalities (withdraw, deposit etc.) of a basic ATM System.
        </p>
      </div>
      <hr />
      <div>
        <p className="font-bold md:text-4xl text-xl text-white mt-3">Technologies Used:</p>
        <div className="flex flex-wrap justify-evenly items-center mt-6">
          <p  className="p-3 max-w-fit border border-solid rounded-full bg-white">
            <TbBrandPython  className=" text-5xl"/>
          </p>
          <p  className="p-2 max-w-fit border border-solid rounded-full bg-white">
            <SiMysql className="text-black text-5xl"/>
          </p>
          <p  className="p-2 max-w-fit border border-solid rounded-full bg-white">
            <SiXampp className=" text-5xl text-orange-400"/>
          </p>
        </div>
      </div>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      project:"project-1"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    project:"project-2"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    project:"project-3"
 },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    project:"project-4"
  },
  
];