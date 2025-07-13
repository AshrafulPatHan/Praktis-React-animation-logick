import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='bg-[#1a1212] h-screen text-white '>
      <h2 className='text-center font-bold text-5xl text-blue-500 mb-5'>All Project</h2>
      <div className='flex flex-col items-center gap-3'>
        <Link to='/baner1'>Baner 1</Link>
        <Link to='/baner2'>counter 2</Link>
        <Link to='/baner3'>animation 3</Link>
        <Link to='/gsap'>Gsap</Link>
        <Link to='/browser'>Browser</Link>
        <Link to='/design'>Design</Link>
        <Link to='/image'>ImageBB Hosing</Link>
      </div>
      
    </div>
  )
}

export default App
