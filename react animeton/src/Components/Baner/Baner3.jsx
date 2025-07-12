import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall'
import snowflake1 from '../../assets/snowflake.png'
import snowflake2 from '../../assets/icons8-snowflake-50.png'


const Baner3 = () => {
    const [snow,setSnow] = useState(true)
    const [snowImages, setSnowImages] = useState([])

    useEffect(() => {
        const img1 = new Image()
        img1.src = snowflake1

        const img2 = new Image()
        img2.src = snowflake2

        setSnowImages([img1, img2])
    }, [])

    const handelToggling = ()=>{
        setSnow(!snow)
    }
    return (
        <div>
            <div className='h-screen flex justify-center items-center ' style={{ background: '#282c34', position: 'relative' }}>
                {snow ? (
                    <Snowfall 
                    snowflakeCount={100}
                    speed={[1, 3]}
                    wind={[0, 2]}
                    radius={[5, 19]}
                    images={snowImages}
                    />
                ):(
                <div></div>
                )}
                <button  onClick={()=> handelToggling()}
                className='bg-blue-400 p-3 rounded-3xl '>
                    {snow ? "Stop Snow Falling" : "Start Snow Falling" }
                    
                </button>
            </div>
        </div>
    );
};

export default Baner3;