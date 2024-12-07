"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function WordPullUp({
  words,

  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },

  className
}) {
  return (
    (<motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        " text-center text-4xl font-bold tracking-[0.1px]  drop-shadow-sm",
        className
      )}>
      {words.split("").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>)
  );
}