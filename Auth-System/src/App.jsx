import { Link } from "react-router-dom"


function App() {

  return (
    <>
      <h2 className="text-center font-bold text-4xl mb-4">Welcome</h2>
      <div className="flex flex-col items-center">
        <Link to='/Login' className="text-blue-600" >Login</Link>
        <Link to='/Registration' className="text-blue-600" >Registration</Link>
      </div>
    </>
  )
}

export default App