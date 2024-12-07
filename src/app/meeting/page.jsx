"use client";

import ShowcaseNavbar from "@/components/ShowcaseNavbar";
import React from "react";
import { motion } from "framer-motion";
import { PiCheckCircle } from "react-icons/pi";
import Calendly from "./calendly";

const checkItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

const Meeting = () => {
  return (
    <div className=" bg-[#140303] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="overflow-clip inset-0   top-0 z-[-2] h-[100%] w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] border-b border-slate-700 bg-[size:20px_20px]">
        <ShowcaseNavbar />
      </div>
      <div className="md:px-0 text-slate-300 px-6 xl:w-4/5 2xl:w-[68%] mx-auto justify-between mt-10 md:mt-10 md:flex">
        <div className="md:w-2/5">
          <h1 className="font-bold text-slate-200 text-2xl">Let&apos;s Meet</h1>
          <p className="text-md text-gray-400  py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>
          <div>
            {[
              {
                title: "Development + Design",
                description:
                  "Turn your ideas into reality with our development and design services.",
              },

              {
                title: "Free Consultation",
                description:
                  "Get expert advice on how to improve your business and increase your online presence.",
              },
              {
                title: "Technical Support",
                description:
                  "Get technical support for your website or application.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={checkItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 1.8 }}
                className="flex gap-x-4 py-4"
              >
                <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                <ul>
                  <h3 className="text-lg font-bold text-slate-300">
                    {item.title}
                  </h3>
                  <div className="text-gray-400 mt-2">{item.description}</div>
                </ul>
              </motion.div>
            ))}
          </div>
          
        </div>
        <div className="md:w-1/2">
            <Calendly />
          </div>
      </div>
    </div>
  );
};
export default Meeting;
