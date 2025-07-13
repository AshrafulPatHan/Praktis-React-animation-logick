import './app.css';

const Css = () => {
    return (
        <div className='flex flex-col items-center '>
            {/* gradiedent */}
            <h3>Gride</h3>
            <div>
                <div className='flex flex-col gap-5'>
                    <button className='btn-border-image'>
                        My Button
                    </button>
                    <button className='border-image-btn w-[220px] h-[60px] bg-[#131212] text-white '>
                        Our Button
                    </button>
                </div>
                {/* gloing card */}
                <div>
                    <div className='card' ></div>
                </div>
            </div>
            <h3 className='mt-10'>Css Columns</h3>
            <div className='columns-3 gap-2'>
                <div className='block mb-2 bg-red-300 w-[300px] h-[100px] '></div>
                <div className='block mb-2 bg-red-800 w-[300px] h-[500px] '></div>
                <div className='block mb-2 bg-amber-300 w-[300px] h-[200px] '></div>
                <div className='block mb-2 bg-amber-800 w-[300px] h-[300px] '></div>
                <div className='block mb-2 bg-amber-300 w-[300px] h-[100px] '></div>
                <div className='block mb-2 bg-amber-700 w-[300px] h-[800px] '></div>
                <div className='block mb-2 bg-blue-300 w-[300px] h-[300px] '></div>
                <div className='block mb-2 bg-amber-300 w-[300px] h-[700px] '></div>
                <div className='block mb-2 bg-green-500 w-[300px] h-[400px] '></div>
            </div>
        </div>
    );
};

export default Css;