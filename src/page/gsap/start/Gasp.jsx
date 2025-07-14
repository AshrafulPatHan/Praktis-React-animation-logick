import {useGSAP} from "@gsap/react";
import gsap from "gsap";


const Gasp = () => {
    // gsap.to() method
    useGSAP(()=>{
        gsap.to('#blue-box-gsap',{
            x:-250,
            repeat:-1,
            yoyo:true,
            rotate:360,
            duration:0.9,
            ease:"back.out",
        })
    })

    return (
        <main className="flex flex-col items-center">
            <h1>Gsap</h1>
            <div className="bg-blue-500 w-48 h-48 rounded-2xl mt-44 " id="blue-box-gsap"></div>
        </main>
    );
};

export default Gasp;