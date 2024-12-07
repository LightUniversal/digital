"use client";

import { InlineWidget } from "react-calendly";


const Calendly =  () => {

    return ( 
    <div className="w-full ">
      <InlineWidget
      styles={{ height: "600px" }}
      url="https://calendly.com/lightsinfo78/30min" />
    </div> );
}
 
export default Calendly;