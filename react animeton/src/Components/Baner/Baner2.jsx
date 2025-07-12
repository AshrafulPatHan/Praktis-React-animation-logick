import CountNav from "../navigation/CountNav";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter/counterSlice'

export default function Baner2() {
  const counts = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <CountNav />
      <h1 className="text-3xl font-bold mb-6">Simple Counter App</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          -
        </button>
        <span className="text-2xl font-semibold">{counts}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
