import React from 'react'
import { useState, useEffect } from "react";

function Schoolmate() {

    const [user, setUser] = useState("");
    const API = "http://localhost:5000/api/SchoolMate";
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


console.log(user)

  return (
   <>

<div className=" pt-20 relative overflow-x-auto sm:rounded-lg ">
    <table className="w-full text-sm text-left rtl:text-right mt first-letter: text-gray-500">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-md font-bold bg-gray-100  mt-52">
                    Names
                </th>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                    School
                </th>
                <th scope="col" className="px-6 py-3 text-md font-bold bg-gray-50 ">
                class
                </th>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                Email
                </th>
                 
            </tr>
        </thead>
     {user && user.map(userinfo=>
      <tbody>

      <tr className="border-b border-gray-200 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  ">
              {userinfo.name}
          </th>
          <td className="px-6 py-4">
          {userinfo.school}
          </td>
          <td className="px-6 py-4 bg-gray-50 ">
          {userinfo.className}
          </td>
          <td className="px-6 py-4">
          {userinfo.email}
           </td>
      </tr>
     
  </tbody>


 )}

      
     </table>
</div>

   </>
  )
}

export default Schoolmate