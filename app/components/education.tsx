import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {Fira_Sans_Condensed}  from 'next/font/google';
import { FollowerPointerCard } from "@/components/ui/following-pointer";
export const fira = Fira_Sans_Condensed({
    subsets: ['latin'],
    weight: '600', // Adjust the weight if necessary
  });
export default function Education() {
  const data = [
    {
      title: "2019-2023 B.Tech",
      content:(
            <div className="block max-w-[450px] p-2 space-y-4 bg-orange-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <FollowingPointerDemo index={0}/>
            </div>
            
      ),
    },
    {
      title: "2017-2019 Intermediate",
      content:(
            <div className="block max-w-[450px] p-2 space-y-4 bg-orange-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <FollowingPointerDemo index={1}/>
            </div>
      )
    },
    {
      title: "2016-2017 Schooling",
      content:(
        <div className="block max-w-[450px] p-2 space-y-4 bg-orange-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <FollowingPointerDemo index={2}/>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

//Card Component



function FollowingPointerDemo({index}:{index:number}) {
  return (
    <div className=" mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent[index].author}
            avatar={blogContent[index].authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-neutral-300 hover:shadow-xl border border-zinc-100">
          <div className=" p-4">
            <div className="flex items-center justify-between">
              <h2 className={`${fira.className} font-bold my-4  text-zinc-700 text-2xl `} >
                {blogContent[index].title}
              </h2>
              <p className={`${fira.className} font-bold my-4  text-zinc-700 `}>CGPA : {blogContent[index].cgpa}/10</p>
            </div>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {blogContent[index].description}
              <br />
              {blogContent[index].description2}
            </h2>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = [{
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Neela Sangam",
  date: "",
  title: "Vidya Jyothi Institute Of Technology",
  description:"Stream : Computer Science and Engineering (CSE)",
  description2:"University Affiliated: Jawaharlal Nehru Technological University Hyderabad (JNTUH).",
  cgpa:"8.0",
  image: "https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=600",
  authorAvatar: "https://media.istockphoto.com/id/910521140/photo/3d-illustration-of-hindu-god-vishnu.jpg?b=1&s=612x612&w=0&k=20&c=E9VI7tu0NCS8fSo11JX37v5SKnSTY16XcMPnow3pegU=",
},
{
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Neela Sangam",
  date: "",
  title: "Narayana Junior College",
  description:"Stream : Math, Physics,Chemistry (M.P.C.)",
  description2:"Boards: Telanagana Board of Intermediate Education.",
  cgpa:"9.6",
  image: "https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=600",
  authorAvatar: "https://media.istockphoto.com/id/910521140/photo/3d-illustration-of-hindu-god-vishnu.jpg?b=1&s=612x612&w=0&k=20&c=E9VI7tu0NCS8fSo11JX37v5SKnSTY16XcMPnow3pegU=",
},
{
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Neela Sangam",
  date: "",
  title: "Vidya Sree High School",
  description:"Xth Boards",
  description2:"Board: S.S.C Board (Secondary School Certificate)",
  cgpa:"8.7",
  image: "https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=600",
  authorAvatar: "https://media.istockphoto.com/id/910521140/photo/3d-illustration-of-hindu-god-vishnu.jpg?b=1&s=612x612&w=0&k=20&c=E9VI7tu0NCS8fSo11JX37v5SKnSTY16XcMPnow3pegU=",
}
];

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
