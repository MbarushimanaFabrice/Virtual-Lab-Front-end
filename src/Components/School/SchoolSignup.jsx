import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SchoolSignup = () => {
  const notify = () => toast("Account Created");
  const notifyerror = () => toast("Your email have been used !");
  const passwordconfirm = () => toast("Please enter same password!");


  const redirect=useNavigate();
  // Define provinces and their corresponding districts
  const provinces = {
    "Kigali City": ["Gasabo", "Kicukiro", "Nyarugenge"],
    "Northern Province": ["Burera", "Gakenke", "Gicumbi", "Musanze", "Rulindo"],
    "Southern Province": [
      "Gisagara",
      "Huye",
      "Kamonyi",
      "Muhanga",
      "Nyamagabe",
      "Nyanza",
      "Nyaruguru",
      "Ruhango",
    ],
    "Eastern Province": [
      "Bugesera",
      "Gatsibo",
      "Kayonza",
      "Kirehe",
      "Ngoma",
      "Nyagatare",
      "Rwamagana",
    ],
    "Western Province": [
      "Karongi",
      "Ngororero",
      "Nyabihu",
      "Nyamasheke",
      "Rubavu",
      "Rusizi",
      "Rutsiro",
    ],
  };
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [Confirmpassword,setConfirmpassword]=useState("");


  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setSelectedProvince(province);
    setSelectedDistrict("");
    setDistricts(provinces[province] || []);
  };
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
  };

  // SchoolSignup
  const [name, setname] = useState("");
  const [combination, setcombination] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message,setmessage]=useState("");

  const SchoolSignup = async (e) => {
    const API = "http://localhost:5000/api/school";
    e.preventDefault();
    if(password===Confirmpassword){

    try {
      const response = await fetch(API, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selectedProvince,
          selectedDistrict,
          name,
          combination,
          email,
          password,
        }),
      });

      if (response.ok) {
        notify();
        // const servermessage = await response.json();
         setTimeout(() => {
          redirect("/SchoolLogin")
         }, 3000);
      } else {
        notifyerror()
        const servermessage = await response.json();
        setmessage(servermessage.message);
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  }else{
    passwordconfirm()
  }
  };

  return (
    <section className="bg-gray-100 py-20  h-[auto]">
      <div>
         <ToastContainer />
      </div>
      <div
        data-v-f74d87e8=""
        class="back-icon fixed -mt-10  text-center items-center  text-orange-700 flex   w-100"
      >
        <Link to="/">
          <a data-v-f74d87e8="" class="flex align-items-center cursor-pointer">
            <svg
              data-v-f74d87e8=""
              viewBox="0 0 24 24"
              width="40"
              height="40"
              stroke="currentColor"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="arrow-left-icon"
            >
              <line data-v-f74d87e8="" x1="19" y1="12" x2="5" y2="12"></line>
              <polyline data-v-f74d87e8="" points="12 19 5 12 12 5"></polyline>
            </svg>
            <span className=" mt-2" data-v-f74d87e8="">
              Back
            </span>
          </a>
        </Link>
      </div>
      <div className=" flex flex-row gap-8 justify-center items-center mb-4 text-2xl  text-slate-500">
        <Link to="/Login" className=" hover:border-b-2 border-orange-500">
          Student
        </Link>
        <Link to="/SchoolLogin" className=" hover:border-b-2 border-orange-500">
          Schools
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <h3 className=" text-2xl text-slate-600 font-bold mx-auto inline-block max-w-[180px]">
                  School Signup
                </h3>
              </div>

              <form onSubmit={SchoolSignup}>
                <input
                  required
                  className="w-full rounded-md border mb-7 border-stroke bg-transparent focus:border-2 px-5 py-3 text-base text-body-color outline-none focus:border-orange-800 focus-visible:shadow-none dark:border-dark-3 "
                  type="text"
                  name="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="School Names"
                />

                <div>
                  <select
                    required
                    class="mb-7  border border-gray-300 text-black text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 dark:bg-white-700  dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    id="province"
                    value={selectedProvince}
                    onChange={handleProvinceChange}
                  >
                    <option value="">School Province</option>
                    {Object.keys(provinces).map((province, index) => (
                      <option key={index} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    class="mb-7  border border-gray-300 text-black text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 dark:bg-white-700  dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    id="district"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    disabled={!selectedProvince}
                  >
                    <option value="">School District</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  value={combination}
                  onChange={(e) => setcombination(e.target.value)}
                  required
                  id="countries"
                  class="mb-7    border border-gray-300 text-black text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 dark:bg-white-700  dark:focus:ring-orange-500 dark:focus:border-orange-500"
                >
                  <option selected>Select Combination</option>
                  <option value="MCB">MCB</option>
                  <option value="PCM">PCM</option>
                  <option value="PCB">PCB</option>
                  <option value="MCB-PCM">MCB-PCM</option>
                  <option value="MCB-PCB">MCB-PCB</option>
                  <option value="PCM-PCB">PCM-PCB</option>
                  <option value="MCB-PCM-PCB">MCB-PCM-PCB</option>
                  <option value="O'level">O'level</option>
                </select>
                <input
                  className="w-full rounded-md border mb-7 border-stroke bg-transparent focus:border-2 px-5 py-3 text-base text-body-color outline-none focus:border-orange-800 focus-visible:shadow-none dark:border-dark-3 dark:text-black"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <input
                  className="w-full mb-7 rounded-md border border-stroke bg-transparent focus:border-2 px-5 py-3 text-base text-body-color outline-none focus:border-orange-800 focus-visible:shadow-none dark:border-dark-3 dark:text-black"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
                 <input
                  className="w-full mb-7 rounded-md border border-stroke bg-transparent focus:border-2 px-5 py-3 text-base text-body-color outline-none focus:border-orange-800 focus-visible:shadow-none dark:border-dark-3 dark:text-black"
                  type="password"
                  name="password"
                  placeholder="Comfirm password"
                  value={Confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  required

                />
                <div className="mb-10">
                  <button className="w-full cursor-pointer rounded-md border border-primary bg-orange-600 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90">
                    Create account
                  </button>
                </div>
              </form>

              <a
                href="/#"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
              >
                Forget Password?
              </a>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">I'm member?</span>
                <Link
                  to="/SchoolLogin"
                  className="text-blue-700  hover:underline"
                >
                  Login
                </Link>
              </p>

              <div>
                <span className="absolute right-1 top-1">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.39737"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 1.39737 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 1.39737 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 13.6943 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 13.6943 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 25.9911 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 25.9911 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 38.288 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 38.288 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 1.39737 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 13.6943 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 25.9911 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 38.288 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 1.39737 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 13.6943 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 25.9911 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 38.288 14.0086)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
                <span className="absolute bottom-1 left-1">
                  <svg
                    width="29"
                    height="40"
                    viewBox="0 0 29 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="2.288"
                      cy="25.9912"
                      r="1.39737"
                      transform="rotate(-90 2.288 25.9912)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="25.9911"
                      r="1.39737"
                      transform="rotate(-90 14.5849 25.9911)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="25.9911"
                      r="1.39737"
                      transform="rotate(-90 26.7216 25.9911)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="13.6944"
                      r="1.39737"
                      transform="rotate(-90 2.288 13.6944)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="13.6943"
                      r="1.39737"
                      transform="rotate(-90 14.5849 13.6943)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="13.6943"
                      r="1.39737"
                      transform="rotate(-90 26.7216 13.6943)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="38.0087"
                      r="1.39737"
                      transform="rotate(-90 2.288 38.0087)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="1.39739"
                      r="1.39737"
                      transform="rotate(-90 2.288 1.39739)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="38.0089"
                      r="1.39737"
                      transform="rotate(-90 14.5849 38.0089)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="38.0089"
                      r="1.39737"
                      transform="rotate(-90 26.7216 38.0089)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="1.39761"
                      r="1.39737"
                      transform="rotate(-90 14.5849 1.39761)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="1.39761"
                      r="1.39737"
                      transform="rotate(-90 26.7216 1.39761)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolSignup;
