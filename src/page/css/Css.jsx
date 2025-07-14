import './app.css';

const Css = () => {
    return (
        <div className='flex flex-col items-center gap-7 '>
            {/* gradiedent */}
            <h3>Gride</h3>
            <div className='flex flex-col items-center gap-5'>
                <div className='flex flex-col gap-5'>
                    <button className='btn-border-image'>
                        My Button
                    </button>
                    <button className='border-image-btn w-[220px] h-[60px] bg-[#131212] text-white '>
                        Our Button
                    </button>
                </div>
                <div className='h-6 w-3 bg-white '></div>
                {/* gloing card */}
                <div>
                    <div className='card' >
                        <h2 className='text-2xl font-bold'>The animated card</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eius saepe quaerat dicta sed at sit laudantium debitis vero fuga sequi consequuntur officiis ullam autem magnam atque laboriosam aspernatur? Harum, saepe animi obcaecati ea, doloremque, commodi molestiae veniam laborum maxime laudantium autem praesentium consequuntur officiis? Repudiandae neque soluta accusantium mollitia.
                        </p>
                    </div>
                </div>
                <div className='h-12 w-3 bg-[#fff0] '></div>
                <div className='cardEs' >
                    <div className='cards' >
                        <h2 className='text-2xl font-bold'>The animated card</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eius saepe quaerat dicta sed at sit laudantium debitis vero fuga sequi consequuntur officiis ullam autem magnam atque laboriosam aspernatur? Harum, saepe animi obcaecati ea, doloremque, commodi molestiae veniam laborum maxime laudantium autem praesentium consequuntur officiis? Repudiandae neque soluta accusantium mollitia.
                        </p>
                    </div>
                </div>
                <div className='h-12 w-3 bg-[#fff0] '></div>
            </div>
            <h3 className='mt-10 mb-11'>Css Columns</h3>
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
            {/* css flex 123 */}
            <div>
                <div></div>
            </div>
        </div>
    );
};

export default Css;