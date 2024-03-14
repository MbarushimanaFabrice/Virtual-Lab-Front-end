import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className=" flex items-center justify-center text-center h-[100vh] bg-slate-100">
        <div className=" lg:w-1/2 bg-white md:w-full shadow-sm shadow-blue-200 rounded p-32 relative">
          <img
            className=" w-40  ml-[35%]"
            src="PageError.png"
            alt="Page not found image"
            srcset=""
          />
          <h2 className=" text-2xl text-slate-600 mt-3 mb-4 font-bold">
            Page Not Found.
          </h2>
          <p className=" font-serif text-lg  text-slate-500 mb-10">
            Sorry, the requested page does not exist.
          </p>
          <Link
            to="/"
            className=" bg-orange-400 rounded-md text-white p-3 hover:bg-orange-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
