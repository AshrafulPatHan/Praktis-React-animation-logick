import { Link } from "react-router-dom";


export default function Gsap(){
   
   return(
      <div className="flex flex-col items-center justify-center h-screen text-blue-500 bg-black">
         <Link to='/gsap1'>animation 1</Link>
         <Link to='/gsap2'>animation 2</Link>
         <Link to='/gsap3'>animation 2</Link>
      </div>
   )
}