import Link from "next/link";
//react icons
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { unbuntu_mono } from "./projects";

export default function Footer(){
    return(
        <div className=" w-full">
            <div className="flex justify-center">
                <hr className=" p-2 w-11/12 "/>
            </div>
            <div className=" flex flex-wrap justify-center items-center">
                <div className="w-9/12 flex  items-center sm:justify-center md:justify-start  gap-7 p-3 ">
                    <Link href={"https://github.com/SangamNeela"} target="_blank">
                        <FiGithub className="text-3xl text-white"/>
                    </Link>
                    <Link target="_blank" href={"https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=CllgCJvqKBnDDzlcgVwjBzXXpBszvJZsVlGFqvnkkwrSdzHDvHrssKdBpBfBKPhpMgCsNtlJFlV"}>
                        <CiMail className="text-3xl text-white"/>
                    </Link>
                    <Link target="_blank" href={"https://x.com/sangam8433"}>
                        <FaXTwitter className="text-3xl text-white"/>
                    </Link>

                </div>
            <div className="text-white">
                <p className="text-lg m-6 group relative w-max">
                    <span className={`px-1 relative z-10 group-hover:text-white ${unbuntu_mono.className}`}>Made With ❤️ ,Thank You!</span>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></span>
                </p>

            </div>
            </div>
        </div>
    );
}