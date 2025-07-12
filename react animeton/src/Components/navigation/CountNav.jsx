import { useSelector, useDispatch } from 'react-redux'

const CountNav = () => {
   const counts = useSelector((state) => state.counter.value)
   return (
      <div className="flex flex-row items-center">
         <div>
            <p className="text-3xl font-bold mb-6">the count is {counts}</p>
         </div>
      </div>
   );
};

export default CountNav;