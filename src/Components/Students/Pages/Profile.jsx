import React from "react";
import { useState, useEffect } from "react";

function Profile() {
  
  const [user, setUser] = useState("");
  const API = "http://localhost:5000/api/StudentInfo";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API, {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const userInfo = await response.json();
          setUser(userInfo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API]);
 
  return (
    <>
      {user && (

       <div className="bg-white w-full flex flex-col gap-5 p-16 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
       <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
           <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-orange-100 top-12">
   
               <h2 className="pl-3 mb-4 text-2xl font-semibold">Profile</h2>
   
               <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white   border rounded-full">
                 Profile
               </a>
               
           </div>
       </aside>
       <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
           <div className="p-2 md:p-4">
               <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
    
                   <div className="grid max-w-2xl mx-auto mt-8">
                       <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
   
                           <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-orange-300 dark:ring-orange-500"
                            src="../student.png"    alt="Bordered avatar"/>
    
                       </div>
   
                       <div className="items-center mt-8 sm:mt-14 text-[#202142]">
   
                           <div
                               className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                               <div className="w-full">
                                   <label for="first_name"
                                       className="block text-gray-400 mb-2 text-lg font-medium   ">Your
                                       first name</label>
                                   <input type="text" id="first_name"
                                       className=" border focus:border-none border-orange-300 cursor-not-allowed text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                                        value={user.name} required  />
                               </div>
                           </div>
   
                           <div className="mb-2 sm:mb-6">
                               <label for="email"
                                   className="block text-gray-400 mb-2 text-lg font-medium   ">Your
                                   school</label>
                               <input type="email" id="email"
                                   className=" border focus:border-none cursor-not-allowed border-orange-300  text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                                   value={user.school}  required/>
                           </div>
   
                           <div className="mb-2 sm:mb-6">
                               <label for="profession"
                                   className="block text-gray-400 mb-2 text-lg font-medium   ">Class</label>
                               <input type="text" id="profession" readOnly
                                   className=" border focus:border-none cursor-not-allowed border-orange-300  text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                                    value={user.className}  required/>
                           </div>
   
                           <div className="mb-2 sm:mb-6">
                               <label for="profession"
                                   className="block text-gray-400 mb-2 text-lg font-medium   ">Email</label>
                               <input type="text" id="profession" readOnly
                                   className=" border focus:border-none border-orange-300 cursor-not-allowed  text-lg rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                                    value={user.email}  required/>
                           </div>
   
                       </div>
                   </div>
               </div>
           </div>
       </main>
      </div>

      )}
    </>
  );
}

export default Profile;
