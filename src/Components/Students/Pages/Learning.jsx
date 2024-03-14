import { useState, useEffect } from "react";
import React from "react";
import './Skeleton.css';

function Learning() {
  const [Case, setCase] = useState("");
   const [loading, setLoading] = useState(false);
   const [search,setsearch]=useState("");

  const API = "http://localhost:5000/api/notes";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 6000);
      try {
        const response = await fetch(API, {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const userInfo = await response.json();
          setCase(userInfo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API]);

  

  return (
    <>
      <div className=" p-20 flex  flex-col justify-center items-center   h-auto">
       
        {Case && Case.length > 0 ? (
          Case.filter((deteailes) => {
            return search.toLocaleLowerCase() === ""
              ? true
              : deteailes.name.toLocaleLowerCase().includes(search);
          }).map((deteailes) => (
               <div
                key={deteailes._id}
                 className=" overflow-auto container p-5 w-full md:w-[64rem]"
              >
                <div className="border  mb-7 border-orange-400 text-start shadow-xl rounded-2xl ">
                  
                  <h2 className=" text-slate-800 pl-4 text-lg  mb-2  font-bold">
                    {deteailes.title}
                  </h2>
                  <p className=" ml-4 pb-8 text-lg font-bold text-slate-500">
                   {deteailes.discription}
                  </p>
                   
                
                </div>
              </div>
           ))
        ) : (
          <>
            {loading && (
              <>
                <div className=" cursor-not-allowed  lg:w-10/12 w-full text-center border-2 m-4   border-orange-200 rounded-md  ml-16 ">
                  <p className=" Skelleton-text bg-black h-4 w-32 ml-6 font-bold m-3 text-lg"></p>
                  <p className=" Skelleton-text bg-black h-4 w-32 ml-6 font-bold m-3 text-lg"></p>
                  <p className=" Skelleton-text h-16 bg-black  ml-6 font-bold m-3 text-lg"></p>
                  <div className=" w-72  flex">
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                  </div>
                </div>

                <div className=" cursor-not-allowed lg:w-10/12  w-full text-center border-2 m-4   border-orange-200 rounded-md  ml-16 ">
                  <p className=" Skelleton-text bg-black h-4 w-32 ml-6 font-bold m-3 text-lg"></p>
                  <p className=" Skelleton-text bg-black h-4 w-32 ml-6 font-bold m-3 text-lg"></p>
                  <p className=" Skelleton-text h-16 bg-black  ml-6 font-bold m-3 text-lg"></p>
                  <div className=" w-72  flex">
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                  </div>
                </div>
                
                <div className=" cursor-not-allowed lg:w-10/12  w-full text-center border-2 m-4   border-orange-200 rounded-md  ml-16 ">
                  <p className=" Skelleton-text bg-black h-4 w-32 ml-6 font-bold m-3 text-lg"></p>
                  <p className=" Skelleton-text bg-black h-4 w-32 ml-6 font-bold m-3 text-lg"></p>
                  <p className=" Skelleton-text h-16 bg-black  ml-6 font-bold m-3 text-lg"></p>
                  <div className=" w-72  flex">
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                  </div>
                </div>

                <div className=" cursor-not-allowed lg:w-10/12  w-full text-center border-2 m-4   border-orange-200 rounded-md  ml-16 ">
                  <p className=" Skelleton-text bg-black h-4 w-32 ml-6 font-bold m-3 text-lg"></p>
                  <p className=" Skelleton-text bg-black h-4 w-32 ml-6 font-bold m-3 text-lg"></p>
                  <p className=" Skelleton-text h-16 bg-black  ml-6 font-bold m-3 text-lg"></p>
                  <div className=" w-72  flex">
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                    <p className=" Skelleton-text bg-black h-4 w-10 ml-6 font-bold m-3 text-lg relative "></p>
                  </div>
                </div>
              </>
            )}
          </>
        )}

    
      </div>
    </>
  );
}

export default Learning;