
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import {FaStar, FaTwitter} from "react-icons/fa";

export  function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex  items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-slate-700 bg-opacity-[0.1]  text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-700 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300  hover:dark:text-neutral-400">
            <p className="flex items-center gap-3 flex-wrap">
            <FaStar className=" text-yellow-300" />
            <FaStar className=" text-yellow-300" />
            <FaStar className=" text-yellow-300" />
            <FaStar className=" text-yellow-300" />
            <FaStar className=" text-yellow-300" />
            <span className=" text-slate-300 flex items-center gap-3"><FaTwitter className="text-blue-200" /> 4.6 stars 200+ X reviews</span>
            </p>
          
          
        </AnimatedShinyText>
      </div>
    </div>
  );
}
