import {useGSAP} from "@gsap/react";

const Timeline = () => {
    return (
        <div className="bg-black w-full flex flex-col items-center h-screen" style={{padding: "50px"}}>
            <div>
                <div className="bg-amber-400 w-28 h-28" id="timeline-gsap"></div>
            </div>
        </div>
    );
};

export default Timeline;