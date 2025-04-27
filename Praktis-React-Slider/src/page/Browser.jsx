import { useState } from "react"
import toast from "react-hot-toast"


export default function Browser() {
   const [search, setSearch] = useState("")

   const handelSearch = (event) =>{
      event.preventDefault();
      const input = event.target.search.value;
      setSearch(input);
      toast.success("Search is complied");
   }
   return(
      <div className="bg-[#161313] h-screen text-white flex flex-col items-center justify-center ">
         <div className="class">
            <form onSubmit={handelSearch} className="flex flex-row items-center justify-center gap-4 mb-6">
               <input type="text" name="search" id="search" className="border border-[#4d3636] rounded-2xl p-2" />
               <button className="w-24 h-10 bg-[#7c6a6a] rounded-3xl px-4 text-center cursor-pointer" type="submit">
                  Search
               </button>
            </form>
            <iframe src={search} frameborder="0" className="w-[90vw] h-[80vh] "></iframe>
         </div>
      </div>
   )
}