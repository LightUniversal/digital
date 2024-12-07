// import { ShimmerButton } from "@/components/ui/button";
import { Link } from "react-scroll";
import ShimmerButton from "../ui/shimmer-button";
import BoxReveal from "@/components/ui/box-reveal";

export function BoxRevealDemo() {
  return (
    <div className=" w-full">
      <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#fff"} duration={0.5}>
          <p className="text-2xl text-slate-300 font-semibold">1. Connect</p>
        </BoxReveal>

        <BoxReveal boxColor={"#fff"} duration={0.5}>
          <h2 className="mt-4 text-slate-300 text-[1rem]">
            Connect with us via 
            <Link href="/meeting" className=" mx-1 align-middle text-blue-600">
              Meeting
            </Link>
          </h2>
        </BoxReveal>
      </div>
      <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#fff"} duration={0.5}>
          <p className="text-2xl text-slate-200 font-semibold">2. Collaborate</p>
        </BoxReveal>

        <BoxReveal boxColor={"#fff"} duration={0.5}>
          <h2 className="mt-4 text-slate-300 text-[1rem]">
            Outline the scope of your project.
          </h2>
        </BoxReveal>
      </div>
      <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#fff"} duration={0.5}>
          <p className="text-2xl text-slate-300 font-semibold">3. Create</p>
        </BoxReveal>

        <BoxReveal boxColor={"#fff"} duration={0.5}>
          <h2 className="mt-4  text-slate-300 text-[1rem]">
            Leave the rest to us.
            
          </h2>
        </BoxReveal>
      </div>
     
    </div>
  );
}
