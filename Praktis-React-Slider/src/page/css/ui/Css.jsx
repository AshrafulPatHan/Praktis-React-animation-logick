import './ok.css';

const Css = () => {
    const dots = Array.from({ length: 8 });
    return (
        <div className='flex flex-col items-center gap-6'>
            <div>
                <div className="relative flex items-center justify-start w-11 h-11">
                    {dots.map((_, index) => (
                        <div
                        key={index}
                        className="absolute top-0 left-0 flex items-center justify-start w-full h-full"
                        style={{
                            transform: `rotate(${index * 45}deg)`,
                        }}
                        >
                        <div
                            className="dot rounded-full w-[20%] h-[20%]"
                            style={{
                            animationDelay: `${(-0.875 + index * 0.125).toFixed(3)}s`,
                            }}
                        ></div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="loop cubes">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={`item cubes item-${i + 1}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Css;