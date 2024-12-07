import React from "react";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";


export function CoverDemo() {
  return (
    (<div>
      <h1
        className="text-xl  md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto  text-center relative z-20  text-white">
        <Cover>
        Digitalize your ideas <br /> with <Cover>
            LuI
        </Cover>
        </Cover>
      </h1>
    </div>)
  );
}
