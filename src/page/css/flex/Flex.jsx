import './flex.css';

const Flex = () => {
    return (
        <div>
            {/* flex Advance */}
            <div>
                <div className='flex-items1'>
                    <p  className='flex-paragraph'>Lorem ipsum !</p>
                    <p  className='flex-paragraph'>Lorem ipsum  elit. accusamus!</p>
                    <p  className='flex-paragraph'>Lorem ipsum consectetur elit. accusamus!</p>
                    <p  className='flex-paragraph'>Lorem ipsum . accusamus!</p>
                    <p  className='flex-paragraph'>Lorem ipsum consectetur accusamus!</p>
                </div>
                <div className='flex-items2'>
                    <p className='flex-paragraph'>Lorem ipsum consectetur. accusamus!</p>
                    <p className='flex-paragraph'>Lorem ipsum  elit!</p>
                    <p className='flex-paragraph'>Lorem ipsum conse elit. accusamus!</p>
                    <p className='flex-paragraph'>Lorem ipsum ctetur elit. accusamus!</p>
                    <p className='flex-paragraph'>Lorem ipsum lit. accusamus!</p>
                </div>
                <div className='flex-items3'>
                    <p className='flex-paragraph'>Lorem  elit. accusamus!</p>
                    <p className='flex-paragraph'>Lorem  consectetur elit. accusamus!</p>
                    <p className='flex-paragraph'>ipsum consectetur. accusamus!</p>
                    <p className='flex-paragraph'>Lorem ipsum conse accusamus!</p>
                    <p className='flex-paragraph'>Lorem ipsuctetur. accusamus!</p>
                </div>
            </div>
            <div>
                {/* flex element inline */}
                <div className='card-flex'>
                    <a className='flex-anchor' href="#">github</a>
                    <a className='flex-anchor' href="#">facebook</a>
                    <a className='flex-anchor' href="#">linkdin</a>
                </div>
            </div>
        </div>
    );
};

export default Flex;