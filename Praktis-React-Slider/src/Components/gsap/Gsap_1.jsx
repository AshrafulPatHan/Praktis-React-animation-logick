import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollSection from "./ScrollSection";


export default function Gsap_1(){
   const boxRef = useRef(null);

   useEffect(() => {
     gsap.to(boxRef.current, {
       x: 300,
       rotate: 360,
       backgroundColor: "#9333ea", // Tailwind এর purple-600 এর HEX
       duration: 2,
     });
   }, []);
   return(
      <div className="flex items-center justify-center h-screen bg-gray-100">
         <div
         ref={boxRef}
         className="w-24 h-24 bg-green-500 rounded-lg shadow-lg"
         ></div>
         <div className="w-full ">
            <ScrollSection/>
            <ScrollSection/>
            <ScrollSection/>
         </div>
      </div>
   )
}