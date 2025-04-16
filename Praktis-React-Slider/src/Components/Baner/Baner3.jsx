import { useState } from 'react';
import Snowfall from 'react-snowfall'
import snowflake1 from '../../assets/snowflake.png'
import snowflake2 from '../../assets/icons8-snowflake-50.png'

const Baner3 = () => {
    const [snow,setSnow] = useState(true)
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
                    radius={[1, 3]}
                    images={[snowflake1, snowflake2]}
                    />
                ):(
                <div></div>
                )}
                
                <button  onClick={()=> handelToggling()}
                className='bg-blue-400 p-3 rounded-3xl '>
                    Stop Snow Falling
                </button>
            </div>
        </div>
    );
};

export default Baner3;