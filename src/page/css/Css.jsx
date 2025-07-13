import './app.css';

const Css = () => {
    return (
        <div className='flex flex-col items-center '>
            {/* gradiedent */}
            <div>
                <div className='flex flex-col gap-5'>
                    <button className='btn-border-image'>
                        My Button
                    </button>
                    <button className='border-image-btn w-[220px] h-[60px] bg-[#131212] text-white '>
                        Our Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Css;