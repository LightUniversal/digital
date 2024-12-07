"use client";

import { CoverDemo } from "@/components/demos/cover-demo";

import { AnimatedShinyTextDemo } from "@/Components/demos/demo";
import BoxReveal from "@/components/ui/box-reveal";
import NumberTicker from "@/components/ui/number-ticker";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { PiCheckBold } from "react-icons/pi";
import { Element, Link } from "react-scroll";
// import Link from "next/link";
import Head from 'next/head';
import { WordPullUpDemo } from "@/components/demos/word-pull-up";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity";
import { BoxRevealDemo } from "@/components/demos/box-reveal-demo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam";
import { FaStar } from "react-icons/fa";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/letsmakethingshappen";
import { Courses } from "@/components/demos/courses";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/s_5.png",
    title: "Content Creation",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/images/s_2.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

export default function Home() {
  return (
   
   <div className=" overflow-clip inset-0   top-0 z-[-2] h-[100%] w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <Element
        name="top"
        className="overflow-hidden rounded-[5px] top-0  sticky md:mx-auto z-[1000] xl:w-4/5 2xl:w-[70%] bg-slate-900 bg-opacity-[1] flex w-full left-0 items-center justify-between py-3 px-4 md:px-8 "
      >
        <Link href="/">
          <Image
            src={`/logo_.png`}
            alt="logo"
            width={2000}
            height={2000}
            className="w-36 relative -left-6"
          />
        </Link>

        <div className=" ">
          <div className="hidden md:flex gap-x-10 items-center text-gray-400 font-medium text-lg cursor-pointer">
            <Link to="courses" smooth={true} className=" hover:text-blue-600">
              Courses
            </Link>

            <Link to="services" smooth={true} className=" hover:text-blue-600">
              Services
            </Link>
            <Link to="process" smooth={true} className=" hover:text-blue-600">
              Process
            </Link>
            <Link
              to="guarentees"
              smooth={true}
              className=" hover:text-blue-600"
            >
              Guarentees
            </Link>
          </div>
        </div>

        <div className="flex  items-center gap-x-4">
          <a href="tel:+2347058032078" className="hidden lg:flex">
            <button className=" px-4 text-blue-600 py-2 rounded-md flex items-center gap-x-3">
              +2347058032078
            </button>
          </a>
          <Link
            href="/meeting"
            className="px-3 py-4 font-bold rounded-md border border-blue-800 bg-[#17158d]  text-neutral-100  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            Book a Call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />
          <h1>
            <CoverDemo />
          </h1>
          <p className="md:text-center text-xl md:text-2xl md:w-4/5 my-6 md:my-10 mx-auto text-slate-400">
            Book a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                  flex-wrap gap-y-4 justify-center
                   "
          >
            <Link
              href={"/meeting"}
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      border-1
      rounded-[6px]
      border-[#403de2]  
      dark:border-white 
       bg-[#17158d] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <a
              href={"https://chat.whatsapp.com/C5z3fdeA8mcGJB5jHoBpNq"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Join our Community
            </a>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-slate-300 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>
              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-600 font-bold text-2xl">
                    <NumberTicker value={1000} /> +
                    <p className="text-gray-100 text-sm md:text-md">
                      Forcasted Clients
                    </p>
                  </h1>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-600 font-bold text-2xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={500} /> +
                    <p className="text-gray-100 text-sm md:text-md">
                     Forecasted Site 
                    </p>
                  </h1>
                </div>
              </div>
            </div>
            <section className="overflow-hidden mt-10 md:w-4/5">
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {Array.from(
                  [
                    {
                      name: "Logos",
                      img: "/logo_.png",
                    },
                    {
                      name: "Logo",
                      img: "/logo_.png",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="bg-slate-900 bg-opacity-[0.2] p-10 "
                    >
                      <Image width={200} height={200} src={`${item.img}`} />
                    </div>
                  ))
                )}
              </Marquee>
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[60%] md:mx-auto">
          <h1 className="text-2xl text-slate-100 text-center font-bold md:text-5xl md:text-center ">
            <WordPullUpDemo />
          </h1>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between text-slate-200 h-full space-y-4 text-center bg-slate-900 bg-opacity-[0.3] border border-slate-900 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 border-t pt-10 border-dashed border-slate-600 px-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex text-slate-300 items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>
          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto border-b pb-6 border-dashed border-slate-700
          text-xl md:text-2xl text-slate-300"
          >
            All of our services are designed to help your business to get
            noticed.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="md:w-[80%] w-full md:1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="md:w-[60%] w-full">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      <section>
        <main className="md:flex text-slate-200 items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo_.png"}
            width={10000}
            height={10000}
            className=" border border-slate-700 md:w-1/3 rounded-sm"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg font-medium md:text-2xl ">
              &quot;We&apos;ve been working with LuI for over 1 year and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <FaStar className="text-xl text-yellow-500" />
              <FaStar className="text-xl text-yellow-500" />
              <FaStar className="text-xl text-yellow-500" />
              <FaStar className="text-xl text-yellow-500" />
              <FaStar className="text-xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Ifezulumba, Emmanuel <br />
              CEO, LuI
            </span>
          </div>
        </main>
      </section>
      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>
      <Element name="courses">
        <Courses />
      </Element>


      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <a
            href="tel:+2347058032078"
            className="text-left   font-bold text-sm  text-blue-500"
          >
            +2347058032078
          </a>
          <p className="text-left font-bold text-xl  text-slate-800">
            admin@lui.com
          </p>
        </div>

        <div className="flex font-bold text-sm  md:justify-center gap-x-4 mt-10">
          © 2025 LuI. All Rights Reserved.
          <Link href={"/ksks"} className="text-blue-600">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
