import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import './from.css';

const From = () => {
    // gsap.FromTo() method
    useGSAP(()=>{
        gsap.fromTo('#blue-fromDox-gsap',{
            x:-250
        },{
            x:250,
            repeat:-1,
            yoyo:true,
            rotate:360,
            borderRadius:100,
            duration:1.5,
            ease:"bounce",
        })
    })
    return (
        <main className="flex flex-col items-center">
            <h1 className="pb-10">Gsap</h1>
            <div className="bg-blue-500 w-48 h-48 rounded-2xl mt-44 " id="blue-box-gsap"></div>
            <div className="bg-[#fff0] w-48 h-48 rounded-2xl mt-44 " ></div>
            <div className="bg-blue-500 w-48 h-48 rounded-2xl mt-44 " id="blue-fromDox-gsap"></div>
        </main>
    );
};

export default From;