
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Link to='/bg' className='text-blue-600 underline'>Go to BG/</Link>
    </div>
  )
}

export default App
