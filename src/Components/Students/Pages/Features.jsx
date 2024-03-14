import React from 'react'
import { Link } from 'react-router-dom' 
function Features() {
  return (
    <>
 <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  self-center ml-14 pt-14 h-[90vh] lg:flex-row gap-10">

 <Link to="/Dashboard/Laboratory">
 
<div className="bg-white rounded-xl p-4 shadow-xl w-96  mt-4 cursor-pointer hover:border-2 hover:border-orange-300">
  <div className="flex  flex-col text-center justify-center items-center">
    <img
      src="download.webp"
      class="w-full h-60 rounded-lg"
    />
  </div>
  <p className="font-semibold text-xl text-slate-700 mt-1 text-left">Laboratory apparatus</p>
  <p className="font-semibold text-sm text-gray-400">
    All Laboratory apparatus and their use.
  </p>
  <div className="flex space-x-2 text-gray-400 items-center mt-2">
    <i className="fas fa-map-marker-alt"></i>
   </div>
</div>
 </Link>

 <Link to="/Dashboard/Ai">
<div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer hover:border-2 hover:border-orange-300">
  <div className="flex  flex-col text-center justify-center items-center">
    <img
      src="aiIcon.png"
      class="w-full h-60 rounded-lg shadow-md"
    />
  </div>
  <p className="font-semibold text-xl text-slate-700 mt-1 text-left">Ask AI</p>
  <p className="font-semibold text-sm text-gray-400">
    Ask AI any laboratory question
  </p>
  <div className="flex space-x-2 text-gray-400 items-center mt-2">
    <i className="fas fa-map-marker-alt"></i>
   </div>
</div>
</Link>

<Link  to="/Dashboard/Learning">
<div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer hover:border-2  hover:border-orange-300">
  <div className="flex  flex-col text-center justify-center items-center">
    <img
      src="idea.png"
      class="w-full shadow-md h-60 rounded-lg"
    />
  </div>
  <p className="font-semibold text-xl text-slate-700 mt-1 text-left">My learning</p>
  <p className="font-semibold text-sm text-gray-400">
    Daily activity and recent searchs
  </p>
  <div className="flex space-x-2 text-gray-400 items-center mt-2">
    <i className="fas fa-map-marker-alt"></i>
   </div>
</div>
</Link>


<Link  to="/Dashboard/Books">
<div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer hover:border-2  hover:border-orange-300">
  <div className="flex  flex-col text-center justify-center items-center">
    <img
      src="idea.png"
      class="w-full shadow-md h-60 rounded-lg"
    />
  </div>
  <p className="font-semibold text-xl text-slate-700 mt-1 text-left">Library</p>
  <p className="font-semibold text-sm text-gray-400">
    Virtual library with AI
  </p>
  <div className="flex space-x-2 text-gray-400 items-center mt-2">
    <i className="fas fa-map-marker-alt"></i>
   </div>
</div>
</Link>


</div>
    </>
  )
}

export default Features