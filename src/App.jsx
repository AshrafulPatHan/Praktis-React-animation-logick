import { Link } from 'react-router'
import './index.css'



function App() {

  return (
    <div className='bg-[#1a1212] text-white '>
      <h2 className='text-center font-bold text-5xl text-blue-500 mb-5'>All Project</h2>
      <div className='flex flex-col items-center gap-3'>
        <Link to='/lu-slider' className='hover:underline'>Liquid slider</Link>
        <Link to='/css-advance' className='hover:underline'>Css Advance</Link>
        <Link to='/css-sudo' className='hover:underline'>Sudo Element</Link>
        <Link to='/css-flex' className='hover:underline'>Flex Element</Link>
        <Link to='/gasp' className='hover:underline'>Gasp Element</Link>
      </div>
    </div>
  )
}

export default App
