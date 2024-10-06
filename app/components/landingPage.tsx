import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
//aceternity ui components
import { ImagesSlider } from "@/components/ui/images-slider";
import { orbitron, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { LinkPreview } from "@/components/ui/link-preview";

//react icons
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { PiPersonSimpleSnowboard } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { TbFileCv } from "react-icons/tb";


//google fonts
import { unbuntu_mono } from "./projects";



export default function  LandingPage(){
    const words = [
        {
          text: "Hello, I'm Sangam.",
          className: "text-yellow-300 dark:text-blue-500",
        },
      ];
    
      const images = [
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            
      ];
      return (
        <ImagesSlider className="min-h-screen w-full" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 w-full flex flex-col justify-center items-center"
        >
          <div className="w-full flex justify-center items-center flex-wrap p-3 gap-x-56">
            <div className="flex flex-col ">
              <div className={` ${unbuntu_mono.className} mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-400`}>
                <TypewriterEffectSmooth words={words} className={`${orbitron.className} sm:text-xl md:text-3xl`}/>
              </div>
              {/* para and contacts */}
              <p className={`font-bold text-xl ${unbuntu_mono.className} max-w-[400px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4`}>
                  I&apos;m a Fresher Grad. I&apos;ve been coding since 2019 and have been built my skills in Full-Stack Development using &quot;MERN Stack&quot;.
                  I&apos;ve developed skills in creating responsive user interfaces, working with databases, and building APIs
                </p>
                <div className="font-bold flex gap-10 items-center justify-center bg-slate-800 rounded-md p-3">
                  <LinkPreview url="https://www.linkedin.com/" >
                    <FaLinkedin className="text-white text-2xl"/>
                  </LinkPreview>
                  <LinkPreview url="https://www.github.com/" >
                    <FiGithub className="text-white text-2xl"/>
                  </LinkPreview>
                  <LinkPreview url="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=jrjtXPVFZGgRJXRrTBSBQThPKFmDwFnPTkBsPCkPpvrgCWsFjbqZvcVxJHtxWSHxrdmVRBzr">
                  <CiMail className="text-white font-bold text-2xl"/>
                  </LinkPreview>
                  <LinkPreview url="https://next-js-authentication-app-auth-js.vercel.app/">
                    <PiPersonSimpleSnowboard className="text-white text-2xl"/>
                  </LinkPreview>
                  <LinkPreview url="https://drive.google.com/file/d/1grtfA4PjHYKtHaEgR2EYtLwGNgmoZRZ7/view?usp=drive_link">
                    <TbFileCv className="text-white text-2xl"/>
                  </LinkPreview>
                </div>
            <div>
            </div>
            </div>
            <Image src="/sangam.jpeg" alt="not found" width={300} height={200} priority className="rounded-full shadow-lg w-2/3 md:w-1/3 lg:max-w-[300px] "/>
          </div>
        </motion.div>
      </ImagesSlider>
      );
}