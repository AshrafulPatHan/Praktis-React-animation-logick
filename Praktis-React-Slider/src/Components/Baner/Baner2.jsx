// CounterApp.jsx
import { useState } from "react";
import CountNav from "../navigation/CountNav";

export default function  Baner2() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <CountNav/>
      <h1 className="text-3xl font-bold mb-6">Simple Counter App</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          -
        </button>
        <span className="text-2xl font-semibold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          +
        </button>
      </div>
      <button
        onClick={() => setCount(0)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Reset
      </button>
    </div>
  );
}


