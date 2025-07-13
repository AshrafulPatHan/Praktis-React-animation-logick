import './slider.css';

const LSlider = () => {
    // image setup
    const image = [
        "../../assets/image/slider/1.jpg",
        "../../assets/image/slider/2.jpg",
        "../../assets/image/slider/3.jpg",
        "../../assets/image/slider/4.jpg",
        "../../assets/image/slider/5.jpg",
    ]
    // content setup
    const texts = [
        ["Mirrorless ", "Take your vision into a picture"],
        ["Leica M6", "Capture the moment you want"],
        ["Camera", "Blur the background to focus your point"],
        ["Glowing ", "Glow your future like this phone"],
        ["Broken ", "Don't be the broken one"],
    ];
    return (
        <div>
            <nav>
                {/* the slider main */}
                <div id='the-slider-main' className=''></div>
                {/* slider nav */}
                <a href="#" className='' id='slider-nav-1' data-nav="Previous"  >Prev</a>
                <a href="#" className='' id='slider-nav-2' data-nav="Next"  >Next</a>
            </nav>
        </div>
    );
};

export default LSlider;