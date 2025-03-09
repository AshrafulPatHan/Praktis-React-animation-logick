import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <h2 className='text-center font-bold text-5xl text-blue-500 mb-5'>All Project</h2>
      <div className='flex flex-col items-center gap-3'>
        <Link to='/baner1'>Baner 1</Link>
        <Link to='/baner2'>Baner 2</Link>
        <Link to='/baner3'>Baner 3</Link>
      </div>
      
    </div>
  )
}

export default App
