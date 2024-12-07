import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import { FaCss3, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Modern JavaScript",
    description:
      "1-3 weeks Extensive JavaScript Course, with projects. ",
    link:"https://chat.whatsapp.com/H3QKbLvh14RIPYm2XtCu4z"

  },
  {
    icon: "/icons/design.svg",
    title: "Complete CSS Course",
    description:
      "Learn how to use css and present a website neatly and nice-looking.",
    link:"https://chat.whatsapp.com/H3QKbLvh14RIPYm2XtCu4z"

  },
  {
    icon: "/icons/scalable.svg",
    title: "HTML AND CSS",
    description: "Learn the structural and the presentational layout of the website.",
    link:"https://chat.whatsapp.com/H3QKbLvh14RIPYm2XtCu4z"
  },
  
  {
    icon: "/icons/safe.svg",
    title: "React JS ( Js Library )",
    description:
      "Learn to build dynamic, interactive, and scalable user interfaces using one of the most popular JavaScript libraries.",
      link:"https://chat.whatsapp.com/KxjvF9DYOsF9fWEI0PqOVu"
  },
  
];

export function Courses() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[10px] bg-slate-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 via-white to-white font-bold flex items-center gap-2 ">
        Recent Courses.
        <p className="md:text-center font-normal  mx-auto  text-lg md:text-2xl text-gray-200">
        Learn to build responsive websites, craft stunning user interfaces, and master modern frameworks and tools.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-slate-950 rounded-xl cursor-pointer"
          >
            
            

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200 mt-2 border p-2 rounded-md border-slate-900">{feature.description}</p>
          <a href={feature.link} className="bg-blue-700 p-3 text-white font-bold rounded-md mt-3">Enroll</a>

          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
