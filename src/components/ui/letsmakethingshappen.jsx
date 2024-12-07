import React from "react";

import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[10px] p-[50px] text-white bg-slate-700 bg-opacity-[0.6] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
          Eye-Opener To Web Development
          <br />
          <span className="text-xl border-t ">
            A Complete Guide to Web Development
          </span>
        </p>

        <p className="my-10 text-lg text-slate-100">
          An Eye-Opener to Web Development covers everything you need to know about web development. How to get started from a no-code or partly-code knowledge background to hands-on coll classical developer. With <span className="text-green-600 font-bold inline-block">$10.00</span>
        </p>

        <a
          href="tel:+2347058032078"
          className="py-4 
            px-10
        
            md:px-16
      md:text-xl
      hover:bg-[#192c4b] 
      rounded-[6px]
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
        "
        >
          Place a Call
        </a>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
